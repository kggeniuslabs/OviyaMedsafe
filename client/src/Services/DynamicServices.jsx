import { servicesData } from "../utils/services/servicesData";
import TOP from "../assets/services/topsvg.png";
import BOTTOM from "../assets/services/bottomsvg.png";
import './Services.css'


const DynamicServices = ({ index }) => {
  
  return (
    <div
      id={servicesData[index]?.id}
      className="position-relative d-flex flex-column flex-sm-row align-items-center justify-content-between overall-pad other-pad"
    >
      {/* Content */}
      <div className="w-100 w-sm-50">
        <h1 className="font-weight-bold main-title mb-3" style={{ fontSize: "32px", color: "var(--heading)" }}>
          {servicesData[index]?.title}
        </h1>
        <p
          className="main-text"
          dangerouslySetInnerHTML={{
            __html: servicesData[index]?.description,
          }}
          style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "justify" }}
        ></p>
      </div>

      {/* Image */}
      <div className="w-100 w-sm-50 position-relative d-flex justify-content-center mt-4 mt-sm-1">
        {/* Main Image */}
        <div className="position-relative" style={{ zIndex: 10 }}>
          <img
            src={servicesData[index]?.image_id}
            alt={servicesData[index]?.alt}
            className="img-size"
           title={servicesData[index]?.tit}
          />
        </div>
      </div>

      <img
        src={TOP}
        alt=""
        className="position-absolute"
        style={{zIndex:"-1000", top: "-240px", left: "-100px", margin: "auto" }}
      />

      <img
        src={BOTTOM}
        alt=""
        className="position-absolute"
        style={{zIndex:"-1000", bottom: "0px", right: "0px", margin: "auto"}}
      />
    </div>
  );
};

export default DynamicServices;


