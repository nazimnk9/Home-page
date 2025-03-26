"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(2)

  const faqData = [
    {
      id: 1,
      number: "01",
      question: "What Is Included In Your Web Development Service?",
      answer:
        "Our web development service includes website design, development, responsive optimization, content management system setup, basic SEO, and post-launch support. We provide a complete solution from concept to deployment.",
    },
    {
      id: 2,
      number: "02",
      question: "What Technologies Do You Use For Web Development?",
      answer:
        "We use modern technologies such as WordPress, HTML5, CSS3, Java Script, PHP, and MySQL to ensure your website is scalable, secure, and responsive.",
    },
    {
      id: 3,
      number: "03",
      question: "What If I Need Ongoing Support After The Website Is Launched?",
      answer:
        "We offer various maintenance packages to ensure your website remains up-to-date, secure, and functioning optimally. Our support team is available to address any issues or implement updates as needed.",
    },
    {
      id: 4,
      number: "04",
      question: "Can I Customize My Website According To My Business Needs?",
      answer:
        "We create fully customized websites tailored to your specific business requirements, brand identity, and target audience. Our design process involves close collaboration to ensure your vision is realized.",
    },
    {
      id: 5,
      number: "05",
      question: "Do You Offer Seo Services As Part Of Your Web Development?",
      answer:
        "Yes, we provide basic SEO optimization with all our web development packages. We also offer comprehensive SEO services as add-ons, including keyword research, content optimization, and ongoing SEO management.",
    },
  ]

  const toggleQuestion = (id) => {
    if (openQuestion === id) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion(id)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0a2472] mb-12">Frequently Asked Questions</h1>

      <div className="space-y-0">
        {faqData.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200">
            <div
              className="flex items-center justify-between py-5 cursor-pointer"
              onClick={() => toggleQuestion(faq.id)}
            >
              <div className="flex items-center gap-6">
                <span className="text-[#0a2472] font-medium w-8">{faq.number}</span>
                <h3 className="font-medium text-gray-700">{faq.question}</h3>
              </div>
              <button className="flex-shrink-0 text-[#0a2472]">
                {openQuestion === faq.id ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
            </div>

            {openQuestion === faq.id && <div className="pl-14 pr-10 pb-5 text-gray-600">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

