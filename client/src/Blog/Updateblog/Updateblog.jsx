

import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Updateblog() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [imagePath, setImagePath] = useState(''); // Stores the current image path
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [blogImage, setBlogImage] = useState(null); // Stores the selected file for upload

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch existing blog details
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://oviyamedsafe.com/api/news/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCategory(data.category_id);
          setTitle(data.news_title);
          setShortTitle(data.news_short_title);
          setImagePath(data.image);
          setDate(data.date);
          setContent(data.news_content);
        } else {
          toast.error('Failed to fetch news .');
        }
      } catch (error) {
        toast.error('An error occurred while fetching news .');
      }
    };

    fetchBlogData();
  }, [id]);

  const handleEditBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category_id', category);
    formData.append('news_title', title);
    formData.append('news_short_title', shortTitle);
    formData.append('date', date);
    formData.append('news_content', content);
    if (blogImage) {
      formData.append('image', blogImage); // Append file only if a new image is uploaded
    }
    console.log(blogImage)
    try {
      const response = await fetch(`https://oviyamedsafe.com/api/news/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        toast.success('News updated successfully.');
        navigate('/adminblog');
      } else {
        toast.error('Failed to update News.');
      }
    } catch (error) {
      toast.error('An error occurred while updating the News.');
    }
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
    ],
  };

  return (
    <div className="container">
      <form onSubmit={handleEditBlog}>
        <div className="form-group row mt-5 mb-2">
          <label className="col-sm-2">Category</label>
          <div className="col-sm-10">
            <select
              className="form-control form-control1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="1">Newsletter</option>
              <option value="2">Announcement</option>
              <option value="3">Articles</option>
            </select>
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Short Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={shortTitle}
              onChange={(e) => setShortTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Image</label>
          <div className="col-sm-10">
            {imagePath && (
              <img
                src={`https://oviyamedsafe.com/api/uploads/${imagePath}`}
                alt="Blog"
                style={{ maxWidth: '100%', marginBottom: '10px' }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="form-control form-control1"
              onChange={(e) => setBlogImage(e.target.files[0])}
            />
          </div>
        </div>

        <div className="my-3 row form-group">
          <label htmlFor="date" className="col-sm-2">
            Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              id="date"
              className="form-control form-control1"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Content</label>
          <div className="col-sm-10">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              className="form-control1 rounded-2"
              placeholder="Write your blog content here..."
            />
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn blogsubbtn">
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Updateblog;
