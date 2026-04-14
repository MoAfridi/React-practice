import React from 'react'
import { faqdata } from './Faqdata'
import FAQ from './FAQ'

export default function FAQS() {
    const faqs = faqdata;

    return (
        <div>
            <h1>FAQS</h1>
            {faqs.map((faq) => (
                <FAQ key={faq.id} {...faq} />
            ))}
        </div>
    )
}