import React from 'react'

function News() {
  return (
    <div className="container blogpartcontent p-0 m-0">
        <h1 className="newshead">News</h1>
      <div className="row my-3 mx-3">
        <div className="col-sm-12 col-lg-7 shcard">
          {news ? (
            <>
              <h4 className="py-3 text-dark blogmainhead" >
              Oviya MedSafe – Convincing Leaders to Constitute Pharmacovigilance
              </h4>
              <div className="d-flex justify-content-center">
                <img
                  src={news.news_image.replace("\\", "/")}
                  alt={news.title}
                  className="imsp py-3 blogpartcontent"
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                style={{ color: "#291750" }}
              />
             
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="col-sm-0 col-lg-1"></div>
        <div className="col-sm-12 col-lg-4">
        <div className="d-flex flex-column">
  <h2 className="py-3 latestnewshead">Subscribe Here to Get More Updates!</h2>
  <input
    type="email"
    className="email-input py-3 border-0 emailbrd"
    placeholder="Email Address"/>
  <button className="border-0 subscribebtn1 py-3 mt-2">SUBSCRIBE</button>
</div>
          <div className="latestupdate">
            <h2 className="my-4 latestnewshead">
              <b>Latest News</b>
            </h2>
            {relatednews.map((relatednews) => (
              <Link
                to={`/news/${relatednews.unique_identifier}`}
                key={relatednews.id}
                style={{ textDecoration: "none" }}
              >
                  <div className="card shadowcard my-2 p-3" style={{ position: 'relative' }}>
                      
                    <div className="card-body">
                      <h5 className="card-title blogsubtitle mt-4">
                        {relatednews.title}
                      </h5>
                      {/* Add more content for the card here */}
                    </div>

                    {/* Rectangular Box in the Top Right Corner */}
                    <div className="rectangular-box text-center">
                    {relatednews.date}
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News