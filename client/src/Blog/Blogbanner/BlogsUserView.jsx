import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Blogbanner.css";
import { LiaCalendar } from "react-icons/lia";
import { LuCircleUserRound } from "react-icons/lu";
import { Helmet } from "react-helmet-async";

const BlogsUserView = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog data
  const navigate = useNavigate();

  // GET LOGIC
  useEffect(() => {
    // Fetch all news from the backend

    window.scroll(0,0);
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://oviyamedsafe.com/api/news");
        if (response.ok) {
          const data = await response.json();
          // Sort blogs by date (most recent first)
          
          const sortedBlogs = data
          .filter(blog => blog.publish === 1)
          .sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setBlogs(sortedBlogs); // Update the state with sorted blogs
        } else {
          console.error("Failed to fetch News");
        }
      } catch (error) {
        console.error("An error occurred while fetching News:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="container-fluid" id="blogs">
      <Helmet>
        <title>Latest News & Events | Oviya MedSafe’s Updates on Drug Safety & Compliance</title>
        <meta name="description" content="Stay updated with Oviya MedSafe’s latest news, industry events, and regulatory developments in pharmacovigilance, drug safety, and global compliance." />
        <meta name="keywords" content="Pharmacovigilance news, drug safety events, regulatory updates, Oviya MedSafe news, pharma industry conferences, drug safety compliance events, healthcare trends, case studies." />
        <link rel="canonical" href="https://www.oviyamedsafe.com/news" />
        <meta property="og:title" content="Latest News & Events | Oviya MedSafe’s Updates on Drug Safety & Compliance" />
        <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
        <meta property="og:url" content="https://www.oviyamedsafe.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="row my-5 pb-5 insightspart">
        <h1 className="text-center subhead2 mb-5">News</h1>

        {blogs.length === 0 ? ( // Check if there are no blogs
          <div className="col-12 text-center">
            <p>Coming Soon</p>
          </div>
        ) : (
          blogs.map( // Display all blogs
            (blog) => (
              <div key={blog.id} className="col-sm-12 col-lg-4 mb-2">
                <div className="card colourcard mt-3 h-100 rounded-3">
                  <img
                    src={`https://oviyamedsafe.com/api/uploads/${blog.image}`} // Use the correct image path here
                    title={blog.news_title}
                    alt={blog.news_title} // Use title as alt text
                    className="card-img-top"
                    style={{ objectFit: "contain", maxHeight: "300px" }}
                  />
                  <div className="card-body">
                    <div className="d-flex px-2 align-items-center readbtn">
                      <p>
                        <LuCircleUserRound
                          style={{
                            fontSize: "22px",
                            verticalAlign: "middle",
                            color: "#64B556",
                          }}
                        />{" "}
                        by Admin /
                      </p>
                      <p className="d-flex gap-1 align-items-center" style={{paddingLeft: "10px"}}>
                        <LiaCalendar
                          style={{
                            fontSize: "22px",
                            verticalAlign: "middle",
                            color: "#64B556",
                            
                          }}
                        />
                        {new Date(blog.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                      </p>
                    </div>
                    <h5 className="card-title text-dark blogtitle px-2">
                      <b className="title-ellipsis">{blog.news_title}</b>
                    </h5>
                    <Link
                      className="px-2 readbtn my-2"
                      to={`/news/${blog.id}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default BlogsUserView;
