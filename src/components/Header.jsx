import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="logo" tabIndex="0">Startvith</div>
      <nav aria-label="Primary navigation">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Services</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
