'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    { id: 1, title: 'Siderian Cloud', category: 'CLOUD APPLICATION', image: '/projects/project1.jpg' },
    { id: 2, title: 'AI Growth Platform', category: 'CLOUD APPLICATION', image: '/projects/project2.jpg' },
    { id: 3, title: 'DNK Ecommerce', category: 'ECOMMERCE', image: '/projects/project3.jpg' },
    { id: 4, title: 'Angular Events', category: 'BUSINESS', image: '/projects/project4.jpg' },
    { id: 5, title: 'AI EdTech Platform', category: 'CLOUD APPLICATION', image: '/projects/project5.jpg' },
    { id: 6, title: 'Chat Application', category: 'BUSINESS', image: '/projects/project6.jpg' },
  ];

  const filters = ['ALL', 'CLOUD APPLICATION', 'ECOMMERCE', 'BUSINESS'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="title-underline"></div>

        <p className="section-description">
          A showcase of my work, highlighting creativity, skill, and dedication. Explore projects that blend innovation with purpose, reflecting my expertise and passion in various tech.
        </p>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
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
