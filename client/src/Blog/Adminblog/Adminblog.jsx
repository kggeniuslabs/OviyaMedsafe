import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Adminblog.css";
import { FaPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Adminblog() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryId, setCategoryId] = useState(null);
  const navigate = useNavigate();
  const {id} = useParams();

// GET LOGIC
  useEffect(() => {
    // Fetch all news from the backend
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://160.153.172.25:5000/api/news');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
          setFilteredBlogs(data);
        } else {
          setError('Failed to fetch courses');
        }
      } catch (error) {
        setError('An error occurred while fetching courses');
      } 
    };
    fetchCourses();
  }, []);

  //DELETE LOGIC
  const handleDeleteBlog = async (blogId) => {
    try {
      const response = await fetch(`http://160.153.172.25:5000/api/news/${blogId}`, {
        method: 'DELETE',
      });

      console.log(response);

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog.id !== blogId));
        setFilteredBlogs(filteredBlogs.filter((blog) => blog.id !== blogId));
        toast.success('Course deleted successfully.');
      } else {
        const data = await response.json();
        toast.error(data.message || 'Failed to delete course.');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
      toast.error('An error occurred while deleting the course.');
    }
  };
console.log(blogs);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBlogs(blogs); // Show all blogs
    } else {
      const categoryId = getCategoryID(category);
      setFilteredBlogs(blogs.filter((blog) => blog.category_id === categoryId)); // Filter blogs by category
    }
  };

  const getCategoryID = (category) => {
    switch (category) {
      case "Newsletter":
        return 1;
      case "Announcement":
        return 2;
      case "Article":
        return 3;
      default:
        return null;
    }
  };

  const handleAddBlogClick = () => navigate(`/addblog`);

  const handleUpdateClick = (blogId) => {
    navigate(`/updateblog/${blogId}`);
  }
  
  const togglePublish = async (id) => {
    // Find the current blog's publish status
    const blog = blogs.find((blog) => blog.id === id);
    if (!blog) {
      console.error("Blog not found");
      return;
    }

    // New publish status (toggle the current status)
    const newPublishStatus = !blog.publish;


    try {
      const response = await fetch(`http://160.153.172.25:5000/api/news/${id}/publish`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ publish: newPublishStatus }),
      });


      const data = await response.json();


      if (response.ok) {
        if(newPublishStatus) {
          toast.success("Blog published successfully");
        }else {
          toast.warning("Blog unpublished successfully");
        }
        setBlogs((prevBlogs) =>
          prevBlogs.map((b) =>
            b.id === id ? { ...b, publish: newPublishStatus } : b
          )
        );
        setFilteredBlogs((prevFilteredBlogs) =>
          prevFilteredBlogs.map((b) =>
            b.id === id ? { ...b, publish: newPublishStatus } : b
          )
        );
      } else {
        toast.error(data.message || "Failed to update publish status");
      }
    } catch (error) {
      toast.error("Error toggling publish status:", error);
    }
  };


  return (
    <div className="container">
      <h1 className="text-center newshead mb-5">News</h1>

      <div className="row m-1">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between text-start">
          <div className="d-flex flex-wrap">
            {["All", "Newsletter", "Announcement", "Article"].map((category) => (
              <Link
                key={category}
                className={`lnkfnt ${selectedCategory === category ? "active" : ""} mb-2 mb-md-0 me-md-5`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="d-flex flex-column flex-md-row">
            <button
              className="btn addbtn mb-2 mb-md-0"
              onClick={handleAddBlogClick}
            >
              <FaPlus /> Add Blog
            </button>

            <button
              className="btn logoutbtn mb-2 mb-md-0 mx-3"
              onClick={() => navigate("/")}
            >
              <FaUserCircle style={{fontSize: "20px"}} className="mx-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="col-12 col-sm-6 col-lg-4 my-1">
            <div className="card shadowcard my-4 position-relative h-100">
              <img
                src={`http://160.153.172.25:5000/uploads/${blog.image}`}
                alt={blog.news_title}
                className="card-img-top p-0 m-0"
              />
              <div className="card-body">
                <h5 className="card-title blogtitle">{blog.news_title}</h5>
                <div className="d-flex justify-content-evenly gap-2">
               <button className="btn blogbtn w-100"
                  onClick={() => navigate(`/news/${blog.id}`)}>
                  View
                </button>
                
                  <button
                    className="btn blogbtn w-100"
                    onClick={()=>handleUpdateClick(blog.id)} >
                    Update
                  </button>
                 
<button className={` btn ${blog.publish ? "btn blogbtn" : "btn publishbtn"}`} onClick={() => togglePublish(blog.id)}>
                    {blog.publish ? "Unpublish" : "Publish"}
                  </button>


              <button onClick={() => handleDeleteBlog(blog.id)}  className="text-danger border-0 delbtn d-flex align-items-center">
              Delete <MdDelete className="mx-1" />
              </button>
                </div>
              </div>  
            </div>
          </div>
        ))}
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Adminblog;


