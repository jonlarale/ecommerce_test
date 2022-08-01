import { Fragment } from "react";
import ImgMediaCard from "../components/ImgMediaCard";
import SimplePaper from "../components/SimplePaper";
import DownloadIcon from "@mui/icons-material/Download";

const ProductList = () => {
  return (
    <Fragment>
      <div
        className="row mt-4 d-flex flex-column pl-0 pr-0"
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "1",
          backgroundColor: "rgba(231, 235, 240,0.8)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="d-flex justify-content-center w-100">
          <SimplePaper>
            <div className="container h-100 w-100">
              <div className="row mx-auto h-100">
                <div className="col-4 my-auto">
                  <DownloadIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="col-8 my-auto">
                  <span>DRAG AND DROP YOUR PRODUCTS HERE</span>
                </div>
              </div>
            </div>
          </SimplePaper>
        </div>
        <h6 className="mt-4 mb-4 pl-4">RESULTADOS</h6>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <ImgMediaCard
            name='Lenovo Ideapad 3i, 14.0\" FHD, Intel Core i5-10210U, 8GB, 512GB SSD, Platinum Grey, Windows 11 Home, 81WA00Q7US'
            price="$4999"
            imgSrc="https://i5.walmartimages.com/asr/5ab9f2fa-c2d3-46d1-b781-6512caa54c73.3e77be4aa33de8b71b5bcd992a9e07fd.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
        <div className="col-4">
          <ImgMediaCard
            price="$8999"
            name='"HP Stream 14\" Laptop, Intel Celeron N4120, 4GB RAM, 64GB eMMC, Jet Black, Windows 11 Home, 14-cf2121wm"'
            imgSrc="https://i5.walmartimages.com/asr/4b2b9ac7-697f-4b8d-96f5-c3bfac5b5c1a.1f43ab9dc0a5df117e2399362b60b246.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
        <div className="col-4">
          <ImgMediaCard
            price="$2799"
            name='"HP 15.6\" Laptop, Intel Pentium Silver N5000, 4GB RAM, 500GB HD, Windows 10 Home, Scarlet Red, 15-dw0081wm"'
            imgSrc="https://i5.walmartimages.com/asr/ddf1ebab-d21b-4969-ac8b-9e133dd18a9d.a4a8d0e9175f9e3c9b00bd1519f41a84.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <ImgMediaCard
            name='Lenovo Ideapad 3i, 14.0\" FHD, Intel Core i5-10210U, 8GB, 512GB SSD, Platinum Grey, Windows 11 Home, 81WA00Q7US'
            price="$4999"
            imgSrc="https://i5.walmartimages.com/asr/5ab9f2fa-c2d3-46d1-b781-6512caa54c73.3e77be4aa33de8b71b5bcd992a9e07fd.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
        <div className="col-4">
          <ImgMediaCard
            price="$8999"
            name='"HP Stream 14\" Laptop, Intel Celeron N4120, 4GB RAM, 64GB eMMC, Jet Black, Windows 11 Home, 14-cf2121wm"'
            imgSrc="https://i5.walmartimages.com/asr/4b2b9ac7-697f-4b8d-96f5-c3bfac5b5c1a.1f43ab9dc0a5df117e2399362b60b246.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
        <div className="col-4">
          <ImgMediaCard
            price="$2799"
            name='"HP 15.6\" Laptop, Intel Pentium Silver N5000, 4GB RAM, 500GB HD, Windows 10 Home, Scarlet Red, 15-dw0081wm"'
            imgSrc="https://i5.walmartimages.com/asr/ddf1ebab-d21b-4969-ac8b-9e133dd18a9d.a4a8d0e9175f9e3c9b00bd1519f41a84.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <ImgMediaCard
            name='Lenovo Ideapad 3i, 14.0\" FHD, Intel Core i5-10210U, 8GB, 512GB SSD, Platinum Grey, Windows 11 Home, 81WA00Q7US'
            price="$4999"
            imgSrc="https://i5.walmartimages.com/asr/5ab9f2fa-c2d3-46d1-b781-6512caa54c73.3e77be4aa33de8b71b5bcd992a9e07fd.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
        <div className="col-4">
          <ImgMediaCard
            price="$8999"
            name='"HP Stream 14\" Laptop, Intel Celeron N4120, 4GB RAM, 64GB eMMC, Jet Black, Windows 11 Home, 14-cf2121wm"'
            imgSrc="https://i5.walmartimages.com/asr/4b2b9ac7-697f-4b8d-96f5-c3bfac5b5c1a.1f43ab9dc0a5df117e2399362b60b246.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
        <div className="col-4">
          <ImgMediaCard
            price="$2799"
            name='"HP 15.6\" Laptop, Intel Pentium Silver N5000, 4GB RAM, 500GB HD, Windows 10 Home, Scarlet Red, 15-dw0081wm"'
            imgSrc="https://i5.walmartimages.com/asr/ddf1ebab-d21b-4969-ac8b-9e133dd18a9d.a4a8d0e9175f9e3c9b00bd1519f41a84.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
