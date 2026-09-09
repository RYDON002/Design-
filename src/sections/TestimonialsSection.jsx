import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import '../styles/testimonials.css'

const testimonials = [
  {
    quote: 'Placeholder feedback describing a thoughtful and collaborative project experience.',
    name: 'Client One',
    role: 'Project Collaborator',
    initials: 'C1',
  },
  {
    quote: 'This temporary quote can later be replaced with approved feedback from a real collaborator.',
    name: 'Client Two',
    role: 'Creative Collaborator',
    initials: 'C2',
  },
  {
    quote: 'Sample testimonial copy reserved for a future verified client or project reference.',
    name: 'Client Three',
    role: 'Development Collaborator',
    initials: 'C3',
  },
]

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const orderedTestimonials = testimonials.map((_, offset) => (
    testimonials[(activeIndex + offset) % testimonials.length]
  ))

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-heading-row">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          description="Sample testimonial content for layout only, ready to be replaced with approved feedback."
          titleId="testimonials-title"
        />

        <div className="testimonial-navigation" aria-label="Testimonial navigation">
          <button type="button" onClick={showPrevious} aria-label="Show previous testimonial">
            <span aria-hidden="true">←</span>
          </button>

          <div className="testimonial-dots" role="group" aria-label="Choose a testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                className={index === activeIndex ? 'is-active' : ''}
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${testimonial.name} placeholder`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <button type="button" onClick={showNext} aria-label="Show next testimonial">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`${testimonials[activeIndex].name} is the first visible placeholder testimonial.`}
      </p>

      <div className="testimonials-grid" id="testimonial-cards" role="list">
        {orderedTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
