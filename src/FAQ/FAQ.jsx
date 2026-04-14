import React, { useState } from 'react'
import "./faqs.moduel.css"

export default function FAQ({ answer, question }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <h3>{question}</h3>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Hide Answer" : "Show Answer"}
            </button>
            {isOpen && <p>{answer}</p>}
        </div>
    )
}