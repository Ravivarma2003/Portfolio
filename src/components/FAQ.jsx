import React, { useState } from 'react';

const faqs = [
  {
    question: "What documents are required for company incorporation?",
    answer: "You typically need identity and address proofs of directors, company name approval, and related documents. We provide detailed checklists."
  },
  {
    question: "How long does GST registration take?",
    answer: "GST registration usually completes within 7-10 working days after submission of valid documents."
  },
  {
    question: "Can you assist with government subsidies?",
    answer: "Yes, we help identify appropriate subsidies and guide you through the application and approval process."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
      <h2>Frequently Asked Questions</h2>
      {faqs.map(({ question, answer }, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question"
            aria-expanded={openIndex === i}
            aria-controls={`faq-${i}`}
            id={`faq-btn-${i}`}
            onClick={() => toggle(i)}
          >
            {question}
            <span className={`faq-toggle-icon ${openIndex === i ? 'rotate' : ''}`}>+</span>
          </button>
          <div
            id={`faq-${i}`}
            className={`faq-answer ${openIndex === i ? 'show' : ''}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
          >
            {answer}
          </div>
        </div>
      ))}
    </section>
  );
}
