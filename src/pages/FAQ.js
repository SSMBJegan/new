import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Craftsvilla?",
      answer: "Craftsvilla is an online marketplace offering a wide range of products including electronics, books, clothing, and home appliances."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support through the 'Contact Us' page on our website or via email at support@craftsvilla.com."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
    },
    {
      question: "Can I return an item?",
      answer: "Yes, we offer a return policy within 30 days of receiving your order. Please refer to our 'Returns & Refunds' section for more details."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the United States. We are working on expanding our shipping options in the future."
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(index)}>
              <span className="question">{faq.question}</span>
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
