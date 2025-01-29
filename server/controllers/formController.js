const formModel = require('../models/formModel');
const transporter = require('../config/emailConfig');
require('dotenv').config();

const submitForm = async (req, res) => {
  try {
    const { name, designation, organization, email, phone_number, message, form_id } = req.body;

    // Save form data in the database
    const result = await formModel.createForm({
      name,
      designation,
      organization,
      email,
      phone_number,
      message,
      form_id
    });

    // Send email only for form_type 1 (Contact Form)
    if (form_id === 1) {
      const subject = 'New Client request recieved!';
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: `info@oviyamedsafe.com`,
        subject: subject,
        html: `
          <div style="display: flex;flex-direction: row;justify-content: center;">
            <div style="background-color: #17BE81;padding: 10px;border-radius: 10px;max-width: 500px;">
              <p style="font-size: 20px;border-bottom:2px solid #fff"><b>Dear Admin, </b><p> 
              <p>You have recevied a new request from a client. Please find the details below:</p>
              <p>Name: ${name}</p>
              <p>Designation: ${designation}</p>
              <p>Organization: ${organization}</p>
              <p>Email: ${email}</p>
              <p>Phone Number: ${phone_number}</p>
              <p>Message: ${message}</p>
              <p>Kindly review and take necessary action.</P>
            </div>
          </div>
       `
      };
      await transporter.sendMail(mailOptions);
    }

    return res.status(200).json({ message: 'Form submitted successfully', result });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

// Get all form entries
const getAllForms = async (req, res) => {
  try {
    const forms = await formModel.getAllForms();
    return res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching forms:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
};
const getAllFormsdowload = async (req, res) => {
  try {
    const forms = await formModel.getAllFormsdownload();
    return res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching forms:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
};
// Get a form entry by ID
const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await formModel.getFormById(id);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    return res.status(200).json(form);
  } catch (error) {
    console.error('Error fetching form by ID:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

module.exports = { submitForm, getAllForms, getFormById,getAllFormsdowload };