import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import "./Addblog.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addblog() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // State for categories
  const [title, setTitle] = useState(""); // State for blog title
  const [shortTitle, setShortTitle] = useState("");
  const [image, setImage] = useState(null);
  const [selectedDate,setSelectedDate]=useState("")
  const userRole = localStorage.getItem("userRole"); 
  const navigate = useNavigate();


  useEffect(() => {
      if (userRole !== "1") {
        navigate("/medsafelogin"); // Redirect if not an admin
      }
    }, [userRole, navigate]);


  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!category || !title || !shortTitle ||!selectedDate || !image || !content) {
      toast.error('All fields are required.');
      return;
    }
  
    const formData = new FormData();
    formData.append('category_id', category)
    formData.append('news_title', title);
    formData.append('news_short_title', shortTitle);
    formData.append('date', selectedDate);
    formData.append('image', image);
    formData.append('news_content', content);
  
    try {
      const response = await fetch('https://oviyamedsafe.com/api/news', {
        method: 'POST',
        body: formData, 
      });
  
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      let data = null;
  
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text(); // Get raw response if not JSON
        // setMessage(text); // Set raw message if needed
        return;
      }
  
      if (response.ok) {
        // setMessage(data.message);
        setTitle('');
        setContent('');
        setCategory('');
        setShortTitle('');
        setImage(null);
        setSelectedDate('');
        toast.success('News added successfully!');
        navigate(`/adminview`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };
                                                                                                                                                                                                                                                                
  return (
    <div className="container bgblogs">
      <div className="row mx-1 mx-md-3">
        <h1 className="newshead pt-5 pb-1">News</h1>
        <div className="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mt-3 mb-2 row form-group">
              <label className="col-sm-2">Category</label>
              <div className="col-sm-10">
                <select
                  className="form-select form-control1"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="1">Newsletter</option>
                  <option value="2">Announcement</option>
                  <option value="3">Article</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Blog Title */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
               News Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the News title"
                  value={title}
                  
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Blog Short Title */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
                News Short Title 
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the News Short title"
                  value={shortTitle}
                  onChange={(e) => setShortTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* date */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
                Date 
              </label>
              <div className="col-sm-10">
              <input
  type="date"
  id="date"
  className="form-control form-control1 blogviewtitle"
  value={selectedDate}
  placeholder="MM/YY"
  onChange={(e) => setSelectedDate(e.target.value)}
  required
/>
              </div>
            </div>
   
            {/* Image Upload */}
            <div className="form-group my-3 row ">
              <label htmlFor="imageUpload" className="col-sm-2">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="imageUpload"
                  className="form-control form-control1"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <div className="form-group row my-3">
              <label className="col-sm-2">News Content</label>
              <div className="col-sm-10 ">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  className="form-control1 rounded-2"
                  placeholder="Write your News content here..."
                />
              </div>
            </div>
          

            {/* Submit Button */}
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btnsub">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Addblog;
