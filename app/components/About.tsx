export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="title-underline"></div>

        <p className="section-description">
          Full Stack Developer with 15+ years of experience delivering scalable
          web solutions. 25K+ Upwork hours, Top Rated Plus, and 100% Job
          Success. Expert in PHP, Laravel, Python, Node.js, FastAPI, Express,
          and Next.js, with strong skills in AI integration, RESTful APIs,
          payment systems, and enterprise-grade architecture. Passionate about
          innovation, clean code, and building solutions that create real
          business impact.
        </p>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">😊</div>
            <div className="stat-number">40+</div>
            <div className="stat-label">Happy Clients</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">📋</div>
            <div className="stat-number">44+</div>
            <div className="stat-label">Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">🎧</div>
            <div className="stat-number">25000+</div>
            <div className="stat-label">Hours Of Support</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-details">
            <h3 className="about-subtitle">
              Full Stack Web Developer | Backend | Frontend
            </h3>

            <p className="about-text">
              I specialize in building scalable, high-performance web
              applications using modern technologies. With experience in PHP,
              Python, JavaScript, and frameworks like Laravel, FastAPI, Next.js,
              and React, I deliver enterprise-grade solutions including RESTful
              APIs, payment systems, and AI integrations. My expertise spans
              from digital wallets and eCommerce platforms to car rental booking
              engines serving millions of users globally.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <div className="info-content">
                  <strong>Degree:</strong> B.Sc in CSE at International Islamic
                  University
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div className="info-content">
                  <strong>Phone:</strong> +88 01919 453895
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div className="info-content">
                  <strong>Email:</strong> srabon.php@gmail.com
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div className="info-content">
                  <strong>City:</strong> Dhaka, Bangladesh
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">💼</span>
                <div className="info-content">
                  <strong>Freelance:</strong> Available
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🌐</span>
                <div className="info-content">
                  <strong>Upwork:</strong> Top Rated Plus
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div className="info-content">
                  <strong>Upwork Hours:</strong> 25,000+
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">⭐</span>
                <div className="info-content">
                  <strong>Job Success:</strong> 100%
                </div>
              </div>
            </div>

            <p className="about-text mt-6">
              I am available for freelance projects, consultations, part-time,
              and full-time opportunities. With extensive experience in web
              development and a proven track record on Upwork, I'm ready to
              collaborate on projects of any scale, offering flexible solutions
              to meet your needs. Feel free to reach out for professional
              assistance tailored to your goals.
            </p>

            {/* Skills Section */}
            <div className="skills-section mt-12">
              <h3 className="skills-title">Skills</h3>
              <div className="skills-underline"></div>

              <p className="skills-description">
                Skilled in modern frameworks, design tools, and full-stack
                development.
              </p>

              <div className="skills-grid">
                {/* Left Column */}
                <div className="skills-column">
                  <div className="skill-item">
                    <span className="skill-name">PHP & LARAVEL</span>
                    <span className="skill-badge expert">Expert</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">NODE.JS & EXPRESS</span>
                    <span className="skill-badge expert">Expert</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">NEXT.JS & REACT</span>
                    <span className="skill-badge expert">Expert</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">REST API & GRAPHQL</span>
                    <span className="skill-badge expert">Expert</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">MYSQL & POSTGRES</span>
                    <span className="skill-badge expert">Expert</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">SYSTEM DESIGN</span>
                    <span className="skill-badge advanced">Advanced</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">TYPESCRIPT</span>
                    <span className="skill-badge advanced">Advanced</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="skills-column">
                  <div className="skill-item">
                    <span className="skill-name">NODE.JS & NESTJS</span>
                    <span className="skill-badge advanced">Advanced</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">MONGODB</span>
                    <span className="skill-badge advanced">Advanced</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">PYTHON & FASTAPI</span>
                    <span className="skill-badge intermediate">Intermediate</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">TAILWIND & BOOTSTRAP</span>
                    <span className="skill-badge intermediate">Intermediate</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">GIT & CI/CD</span>
                    <span className="skill-badge intermediate">Intermediate</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">DOCKER & KUBERNETES</span>
                    <span className="skill-badge beginner">Beginner</span>
                  </div>

                  <div className="skill-item">
                    <span className="skill-name">AWS & CLOUD NATIVE</span>
                    <span className="skill-badge beginner">Beginner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
