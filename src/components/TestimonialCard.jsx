function TestimonialCard({ quote, name, role, initials }) {
  return (
    <article className="testimonial-card" role="listitem">
      <span className="testimonial-quote-mark" aria-hidden="true">“</span>

      <blockquote>
        <p>{quote}</p>
      </blockquote>

      <footer className="testimonial-author">
        <span className="testimonial-avatar" aria-hidden="true">{initials}</span>
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </footer>
    </article>
  )
}

export default TestimonialCard
