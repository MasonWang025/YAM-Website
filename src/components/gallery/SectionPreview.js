import React from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export default function SectionPreview(props) {
  if (props.name !== "submit")
    return (
      <Link
        to={`/gallery/${props.name}`}
        className={`section ${props.name}`}
        style={{ textDecoration: "none" }}
      >
        <div>
          <div style={{ height: "100%", width: "100%" }}>
            <Image
              cloudName="masonwang"
              publicId={`https://res.cloudinary.com/masonwang/image/upload/${
                props.name === "visualarts" ? "v1595458581" : "v1595458066"
              }/yam-website/gallery/previews/${props.name.replace(
                " ",
                "-"
              )}-cover.jpg`}
              className="section-bg"
              style={{ backgroundColor: "#152828" }}
            />
            <h1>{props.h1}</h1>
            {props.h2 && <h2>{props.h2}</h2>}
          </div>
        </div>{" "}
      </Link>
    );
  else
    return (
      <div className="submit">
        <h1>Submit Art</h1>
        <h2>Inspire others and empower your voice</h2>
        <Link to="/gallery/submit" className="action-btn">
          Submit
        </Link>
      </div>
    );
}
