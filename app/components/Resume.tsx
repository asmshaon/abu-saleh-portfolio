export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="title-underline"></div>

        <p className="section-description">
          Below, I have outlined my educational background and professional
          experience.
        </p>

        <div className="resume-grid">
          {/* Left Column - Summary & Education */}
          <div className="resume-column">
            <h3 className="resume-column-title">Summary</h3>

            <div className="resume-item">
              <p className="resume-item-description">
                Full Stack Developer and Solution Architect with over 15 years
                of experience delivering scalable, high-availability, and
                cost-efficient web applications. Skilled in PHP, Node.js, and
                React, with strong expertise in AI integration, payment systems,
                and cloud-native architecture. Passionate about designing clean,
                maintainable systems that drive measurable business results.
              </p>
            </div>

            <h3 className="resume-column-title mt-8">Education</h3>

            <div className="resume-item">
              <h4 className="resume-item-title">B.Sc. in CSE</h4>
              <p className="resume-item-period">2005 - 2009</p>
              <p className="resume-item-location">
                International Islamic University Chittagong, Bangladesh
              </p>
            </div>

            <h3 className="resume-column-title mt-8">Certifications</h3>

            <div className="resume-item">
              <h4 className="resume-item-title">Laravel Certified</h4>
              <p className="resume-item-period">2023</p>
            </div>

            <div className="resume-item">
              <h4 className="resume-item-title">PHP Certified</h4>
              <p className="resume-item-period">2010</p>
            </div>
          </div>

          {/* Right Column - Professional Experience */}
          <div className="resume-column">
            <h3 className="resume-column-title">Professional Experience</h3>

            <div className="resume-item">
              <h4 className="resume-item-title">FULL STACK WEB DEVELOPER</h4>
              <p className="resume-item-period">Jan 2010 - Present</p>
              <p className="resume-item-location">
                Freelancing | Remote | Upwork
              </p>
              <ul className="resume-item-list">
                <li>
                  Full Stack Developer with over 15 years of experience in web
                  technologies
                </li>
                <li>
                  Boosted transaction security by 25% through developing a
                  secure RESTful API for digital wallet and ecommerce platform
                </li>
                <li>
                  Created comprehensive admin portals with reporting and
                  analytics
                </li>
                <li>
                  Implemented critical security fixes ensuring compliance across
                  financial operations
                </li>
                <li>
                  Successfully completed over 25K Upwork hours with 100% job
                  success rate and received Top-Rated Plus Badge
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4 className="resume-item-title">SR. WEB DEVELOPER</h4>
              <p className="resume-item-period">Jan 2015 - Jan 2020</p>
              <p className="resume-item-location">
                VroomVroomVroom Pty Ltd | Australia
              </p>
              <ul className="resume-item-list">
                <li>
                  Developed enterprise-grade car rental booking engine using
                  RESTful APIs
                </li>
                <li>
                  Built features like airport retargeting, loyalty programs, and
                  dynamic pricing
                </li>
                <li>
                  Integrated over 20 international suppliers, managing real-time
                  inventory
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4 className="resume-item-title">SR. SOFTWARE DEVELOPER</h4>
              <p className="resume-item-period">Jan 2012 - Jan 2015</p>
              <p className="resume-item-location">
                Okdoit & Moteel.com | Saudi Arabia
              </p>
              <ul className="resume-item-list">
                <li>
                  Built hotel and task management applications using Ruby on
                  Rails and Laravel
                </li>
                <li>
                  Enabled email integration, booking systems, and workflow
                  automation
                </li>
                <li>Participated in agile development using Scrum</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4 className="resume-item-title">WEB DEVELOPER</h4>
              <p className="resume-item-period">Jan 2009 - Jan 2011</p>
              <p className="resume-item-location">
                Bengals Solutions & Informatix Technologies | Bangladesh
              </p>
              <ul className="resume-item-list">
                <li>
                  Increased efficiency by 15% by developing full-stack web
                  applications using Zend Framework and CodeIgniter
                </li>
                <li>
                  Improved recruitment process efficiency by 30% by developing
                  an enterprise-level job portal with advanced search functions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
