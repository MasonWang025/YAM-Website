import React from "react";
import SectionHero from "../components/SectionHero";
import CurrentProjects from "../components/projects/CurrentProjects";

export default function Projects() {
  return (
    <div className="chapters page">
      <SectionHero
        title="Projects"
        subtitle=""
        imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/e_blur:0/v1612564926/Pages/anime-illustration-landscape-sea-wallpaper-preview_pqnu23.jpg"
      />
      <CurrentProjects />
    </div>
  );
}
