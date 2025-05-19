import React, { useState } from 'react';

export default function Hero() {
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  const handleLearnMore = () => {
    setShowTeamInfo(true);
  };

  return (
    <section className="hero" id="hero" role="region" aria-label="Hero content">
      <div className="hero-content">
        <h1>Your One-Stop Solution for Startups & Small Businesses</h1>
        {!showTeamInfo ? (
          <>
            <p>
              Comprehensive legal, financial, compliance, and digital marketing support to scale your venture with ease.
            </p>
            <div className="hero-buttons">
              
              <button className="btn-secondary" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </>
        ) : (
          <>
            <p>
              We are a dynamic team of Chartered Accountants, Cost Accountants, Advocates, Engineers, Architects, and Business Administrators with a common goal - to simplify the journey of entrepreneurs and small businesses by offering comprehensive business support under one roof.
            </p>
            <div className="hero-buttons">
              <button className="btn-secondary" onClick={() => setShowTeamInfo(false)}>
                Show Less
              </button>
            </div>
          </>
        )}
      </div>
      <div className="hero-image" role="img" aria-label="Business support illustration">
        <img
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80"
          alt="Business support illustration"
          loading="lazy"
        />
      </div>
    </section>
  );
}
