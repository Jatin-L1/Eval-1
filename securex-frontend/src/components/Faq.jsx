import React, { useState, useRef } from 'react';
import FaqImage from '../assets/Faq.jpeg'; // Adjust this path as needed
import '../assets/faq.css';

const Faq = ({ faqItems = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const faqRefs = useRef([]); // Reference to each FAQ item for smooth scrolling

  // Toggle the FAQ item
  const handleToggle = (index) => {
    setExpandedItem((prevIndex) => (prevIndex === index ? null : index));
    if (faqRefs.current[index]) {
      faqRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle search query and filter visible items
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Find the first matching item and scroll to it
    const firstMatchIndex = faqItems.findIndex((item) =>
      item.question.toLowerCase().includes(query)
    );

    if (firstMatchIndex !== -1) {
      setExpandedItem(firstMatchIndex);
      if (faqRefs.current[firstMatchIndex]) {
        faqRefs.current[firstMatchIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setExpandedItem(null);
    }
  };

  return (
    <main>
      {/* FAQ Content Section */}
      <div className="head d-flex mx-5">
        <h1 className="mx-3">Frequently Asked Questions</h1>
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="form-control"
            placeholder="Search FAQs..."
          />
        </div>
      </div>
      <div className="content-section">
        {/* FAQ Section */}
        <section className="faq-section">
          <div className="accordion" id="faqAccordion">
            {faqItems.map((item, index) => {
              const isVisible = item.question.toLowerCase().includes(searchQuery);
              return (
                <div
                  className={`accordion-item faq-item ${expandedItem === index ? 'active' : ''} ${isVisible ? '' : 'hidden'}`}
                  key={index}
                  ref={(el) => (faqRefs.current[index] = el)}
                  style={{ display: isVisible ? 'block' : 'none' }}
                >
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${expandedItem === index ? '' : 'collapsed'} text-dark`}
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={expandedItem === index}
                      aria-controls={`collapse${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${expandedItem === index ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Question Section */}
        <section className="question-section">
          <h3>Any Question?</h3>
          <p style={{ color: "white" }}>
            You can ask anything you want to know about Feedback.
          </p>
          <form>
            <input type="text" placeholder="Let me know..." />
            <button type="submit">Send</button>
          </form>
          <div className="photo-placeholder">
            <img src={FaqImage} alt="Forgot Password Illustration" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Faq;
