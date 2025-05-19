import React, { useState } from "react";

const featureData = [
  {
    id: "business",
    title: "For Business & Startups",
    summary:
      "Comprehensive support including registrations, compliance, accounting, advisory, and ongoing legal services.",
    details: [
      {
        heading: "Registrations & Incorporations",
        items: [
          "GST Registration",
          "MSME / Udyam Registration",
          "Company Incorporation (Private Ltd, LLP, OPC, Section 8)",
          "Import Export Code (IEC)",
          "Shops & Establishments Registration",
          "FSSAI, Labour, PF, ESI, Professional Tax",
          "Trade License & Environmental Clearances",
        ],
      },
      {
        heading: "Licensing & Compliance",
        items: [
          "Trademark & Patent Registration",
          "Digital Signature Certificates (DSC)",
          "ISO Certification Assistance",
          "Legal Entity Name Search",
          "Labour Law Compliance & Registers",
          "Factory License Assistance",
        ],
      },
      {
        heading: "Accounting & Taxation",
        items: [
          "Monthly/Quarterly Bookkeeping & Accounting",
          "GST Returns (GSTR-1, 3B, 9, 9C, etc.)",
          "TDS Returns & Advisory",
          "Advance Tax & Professional Tax Filing",
          "Financial Statement Preparation",
        ],
      },
      {
        heading: "Business Advisory & Funding",
        items: [
          "Business Plans & CMA Reports",
          "Loan Assistance (Working Capital, Term Loans)",
          "Startup India Registration & DPIIT Recognition",
          "Subsidy Applications",
          "Startup & M&A Valuation Services",
        ],
      },
      {
        heading: "Ongoing Support & Legal Services",
        items: [
          "ROC Filings (AOC-4, MGT-7, etc.)",
          "Director KYC & DIN Compliance",
          "ESOP Implementation",
          "Drafting Agreements (Founders, Shareholders, Vendors, Employees, etc.)",
          "Internal Audits, Due Diligence, Risk Advisory",
          "Representation before Tax Authorities (GST, Income Tax, ROC)",
        ],
      },
    ],
  },
  {
    id: "digital",
    title: "Digital Marketing Services",
    summary:
      "Build and grow your brand online with branding, marketing, content, and analytics solutions.",
    details: [
      "Your online presence matters — we help you build, market, and grow your brand with our end-to-end digital marketing solutions.",
      "Branding & Identity",
      "Logo Design & Brand Identity",
      "Business Profile & Pitch Deck Creation",
      "Website Design (Static, Dynamic, E-commerce)",
      "Google Business Profile Optimization",
      "Marketing & Promotion",
      "Social Media Marketing (Facebook, Instagram, LinkedIn, Twitter)",
      "SEO (On-page & Off-page)",
      "Google Ads & PPC Campaigns",
      "Email, WhatsApp & SMS Campaigns",
      "Content & Strategy",
      "Website, Blog, and Campaign Content",
      "Marketing Funnels & Strategy",
      "Influencer & Video Marketing",
      "Analytics & Growth",
      "Performance Monitoring & Reports",
      "Lead Generation Campaigns",
      "Conversion Rate Optimization",
      "Online Reputation Management (ORM)",
    ],
  },
  {
    id: "individuals",
    title: "For Individuals",
    summary:
      "Tailored financial compliance and planning services for individuals and NRIs.",
    details: [
      "Income Tax Return Filing (Salaried, Business, Capital Gains)",
      "Tax Planning & Advisory",
      "Capital Gains & Foreign Income Reporting",
      "Investment Declarations & Form 12BB",
      "PAN Services & TDS Refunds",
      "Rental Income Taxation",
      "NRI Return Filing",
      "IT Notice Handling & Appeals",
      "Wealth & Retirement Planning",
    ],
  },
];

export default function Features() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleToggleDetails = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section className="features-section">
      <h2>Our Expert Services</h2>
      <div className={`feature-cards-container ${expandedCardId ? 'expanded-container' : ''}`}>
        {featureData.map((feature) => {
          const isExpanded = expandedCardId === feature.id;
          return (
            <article
              key={feature.id}
              className={`feature-card ${isExpanded ? "expanded-full" : ""}`}
            >
              <h3>{feature.title}</h3>
              <p className="summary">{feature.summary}</p>
              {isExpanded && (
                <div className="feature-details">
                  {feature.details[0]?.heading ? (
                    feature.details.map(({ heading, items }, idx) => (
                      <section key={idx} className="details-group">
                        <h4>{heading}</h4>
                        <ul>
                          {items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))
                  ) : (
                    <ul>
                      {feature.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <button
                type="button"
                className="toggle-btn"
                aria-expanded={isExpanded}
                onClick={() => handleToggleDetails(feature.id)}
              >
                {isExpanded ? "Close" : "More"}
              </button>
            </article>
          );
        })}
      </div>
      <style>{`
        .features-section {
          padding: 2rem 1rem;
          text-align: center;
        }
        .feature-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          padding: 2rem 1rem;
          transition: all 0.3s ease; /* For smooth transition when expanding */
        }
        .feature-cards-container.expanded-container {
          /* When a card is expanded, we might want to adjust the container */
          /* For this effect, we might not need specific container styles here */
        }
        .feature-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          user-select: none;
          transition: all 0.3s ease, z-index 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }
        .feature-card:hover {
          transform: scale(0.98);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .feature-card.expanded-full {
          grid-column: 1 / -1; /* Take full width of the grid */
          /* You might want to adjust other styles here */
          z-index: 10;
          transform: scale(1); /* Reset any scaling */
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        /* Hide other cards when one is fully expanded */
        .feature-cards-container.expanded-container > .feature-card:not(.expanded-full) {
          opacity: 0.3;
          pointer-events: none; /* Prevent interaction with other cards */
        }
        .feature-card h3 {
          color: #004086;
          margin-bottom: 0.75rem;
        }
        .summary {
          color: #333;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .feature-details {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }
        .feature-details h4 {
          color: #004086;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
        }
        .feature-details ul {
          list-style: disc inside;
          padding-left: 1.2rem;
        }
        .feature-details ul li {
          color: #222;
          margin-bottom: 0.3rem;
        }
        .toggle-btn {
          background: #004086;
          color: white;
          border: none;
          border-radius: 25px;
          padding: 0.5rem 1rem;
          font-weight: 600;
          cursor: pointer;
          align-self: flex-start;
          transition: background-color 0.3s ease;
        }
        .toggle-btn:hover {
          background: #002f5d;
        }

        @media (max-width: 768px) {
          .feature-cards-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}