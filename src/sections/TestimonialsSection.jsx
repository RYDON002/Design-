import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import '../styles/testimonials.css'

const testimonials = [
  {
    quote: 'Rydon is a focused and dependable developer who approaches projects with strong technical thinking and attention to detail. He communicates clearly, solves problems practically, and is committed to delivering quality digital solutions.',
    name: 'Dev Bello',
    role: 'CEO, BelNavo Tech',
    initials: 'DB',
  },
  {
    quote: 'Your dedication to building this tech ecosystem has always stood out. You keep learning, building, and pushing through challenges, and that consistency is what makes Dev Rydon a name people can respect.',
    name: 'Show_guy_Fx',
    role: 'Tech Community Supporter · Paraphrased from prior feedback',
    initials: 'SF',
  },
  {
    quote: 'Rydon’s commitment to technology is clear in the way he approaches every project. He works hard, keeps improving, and stays focused on turning ideas into real digital solutions.',
    name: 'Amospikins',
    role: 'Tech Community Supporter · Paraphrased from prior feedback',
    initials: 'AM',
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
          description="Feedback on the work and collaboration behind these projects."
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
                aria-label={`Show ${testimonial.name} testimonial`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>

          <button type="button" onClick={showNext} aria-label="Show next testimonial">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`${testimonials[activeIndex].name} is the first visible testimonial.`}
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
