import React from "react";
import OurStory from "../components/about/OurStory";
import SectionHero from "../components/SectionHero";

export default function About() {
  return (
    <div className="about page">
      <SectionHero
        title="About YAM"
        subtitle="The Youth Arts Movement"
        imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/e_blur:0/v1612564883/Pages/pasted_image_0_4_f1iqg4.png"
      />
      <OurStory />
    </div>
  );
}
