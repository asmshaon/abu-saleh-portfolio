"use client";

import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Car Booking Engine",
      category: "B2B CLOUD & SASS APPLICATION",
      image: "/projects/project1.jpg",
    },
    {
      id: 2,
      title: "Travel, Cruise, Hotels",
      category: "B2C SASS APPLICATION",
      image: "/projects/project2.jpg",
    },
    {
      id: 3,
      title: "SPORTS Ecommerce",
      category: "SASS ECOMMERCE",
      image: "/projects/project3.jpg",
    },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="title-underline"></div>

        <p className="section-description">
          A showcase of my work that highlights creativity, skill, and
          dedication. Explore projects that blend innovation with purpose,
          reflecting my expertise and passion across modern technologies.
        </p>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="portfolio-img"
                />
                <div className="portfolio-overlay">
                  <h4 className="portfolio-title">{project.title}</h4>
                  <p className="portfolio-category">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
