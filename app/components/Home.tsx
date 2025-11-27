"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const titles = [
  "Full-Stack Web Developer",
  "Solution Architect & System Designer",
  "PHP & Laravel Expert",
  "Node.js, Nest.js & Next.js Specialist",
  "Database & API Engineer",
  "AI & RAG Application Developer",
];

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterTyping = 2000; // Pause after fully typing
    const pauseAfterDeleting = 500; // Pause after fully deleting

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setTimeout(() => {}, pauseAfterDeleting);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="section home-section">
      <div className="animated-bg">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={`line-${index}`} className="line"></div>
        ))}
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={`particle-${index}`} className="particle"></div>
        ))}
      </div>

      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Abu Saleh Muhammad Shaon</h1>
          <p className="home-subtitle">
            I&apos;m <span className="typing-text">{displayedText}</span>
          </p>
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
        </div>

        <div className="home-image">
          <div className="image-frame">
            <Image
              src="/portait-profile.png"
              alt="Abu Saleh Muhammad Shaon"
              width={400}
              height={500}
              className="profile-main"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
