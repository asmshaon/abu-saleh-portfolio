export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Full-Stack Web Development",
      description:
        "Building robust, scalable, and high-availability web applications with over 15 years of experience using PHP, Node.js, React, TypeScript, Laravel, Express, and FastAPI.",
    },
    {
      icon: "🏗️",
      title: "System Design & Solution Architecture",
      description:
        "Designing clean, maintainable, and cost-efficient cloud-native architectures. Expert in creating scalable systems that drive measurable business results.",
    },
    {
      icon: "🗄️",
      title: "Backend Development",
      description:
        "Building secure, scalable backend solutions using PHP, Node.js, TypeScript, Laravel, Express, Nest, FastAPI, and Symfony with PostgreSQL, MySQL, and MongoDB.",
    },
    {
      icon: "⚛️",
      title: "Frontend Development",
      description:
        "Creating responsive, interactive web applications with Next.js, Vue.js, Livewire, React, Tailwind, and Bootstrap focused on performance and user experience.",
    },
    {
      icon: "🔌",
      title: "API Development & Integration",
      description:
        "Developing enterprise-grade RESTful APIs, GraphQL services, and API Gateway solutions. Expert in integrating payment systems, AI services, and third-party APIs.",
    },
    {
      icon: "☁️",
      title: "Cloud-Native & DevOps",
      description:
        "Implementing microservices architecture using Docker, Kubernetes, CI/CD pipelines, Kong API Gateway, AWS, and RabbitMQ for scalable cloud solutions.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="title-underline"></div>

        <p className="section-description">
          Full Stack Developer and Solution Architect with over 15 years of
          experience delivering scalable, high-availability, and cost-efficient
          web applications. Skilled in PHP, Node.js, React, with strong expertise
          in AI integration, payment systems, and cloud-native architecture.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">Testimonials</h3>
          <p className="testimonials-description">
            Hear from my clients about their experiences! Discover how my
            expertise in software development has helped businesses grow with
            efficient, scalable and reliable application.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <p className="testimonial-text">
                Abu was a pleasure to work with. He is professional, reliable,
                and a very hard worker. Always positive, he works well both
                independently and as part of a team. He consistently made
                himself available when needed and brought creative,
                out-of-the-box thinking to every project. Abu stays up to date
                with best practices and modern frameworks, ensuring high-quality
                results. I highly recommend him for full-stack development work.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-stars">★★★★★</div>
                <strong>Upwork Client</strong>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <p className="testimonial-text">
                I can&apos;t recommend Abu enough. He was a pleasure to work
                with from start to finish. Abu demonstrated strong technical
                expertise across both front-end and back-end development,
                delivering clean, efficient code and thoughtful solutions
                throughout the project. He is a very hard worker, listener and
                problem solver. I came to him only with an idea and he built it
                from scratch. Communication was clear, prompt, and professional,
                and he consistently met (or beat) deadlines. What really stood
                out was his proactive approach to solving problems and
                suggesting improvements that added real value. I will absolutely
                hire Abu again for future projects and recommend him to anyone
                looking for a skilled and dependable developer.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-stars">★★★★★</div>
                <strong>Upwork Client</strong>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <p className="testimonial-text">
                Abu Saleh is one of the best developers I&apos;ve ever worked
                with on Upwork. He not only can accomplish any job presented to
                him, but he makes really sound judgements on how to fill in all
                the gaps that were previously undefined. In addition to this, he
                has exceptional leadership skills as he led our team of
                developers to complete the project at hand. We have already
                re-hired him for our next project. Highly recommend.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-stars">★★★★★</div>
                <strong>Upwork Client</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
