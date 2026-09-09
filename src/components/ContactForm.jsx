import { useState } from 'react'
import Icon from './Icon'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const fieldLabels = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
}

function validateForm(values) {
  const errors = {}

  Object.entries(values).forEach(([field, value]) => {
    if (!value.trim()) {
      errors[field] = `${fieldLabels[field]} is required.`
    }
  })

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please review the highlighted fields.')
      return
    }

    setStatus('Form interface ready — delivery will be connected later.')
  }

  const fieldDescription = (field) => errors[field] ? `${field}-error` : undefined

  return (
    <div className="contact-form-panel">
      <div className="contact-form-heading">
        <p className="panel-label">Frontend form preview</p>
        <h3>Start a Conversation</h3>
        <p>This form is ready for a future delivery integration.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-field-row">
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={fieldDescription('name')}
            />
            {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={fieldDescription('email')}
            />
            {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={fieldDescription('subject')}
          />
          {errors.subject && <p className="field-error" id="subject-error">{errors.subject}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={fieldDescription('message')}
          />
          {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
        </div>

        <div className="contact-submit-row">
          <button className="contact-submit" type="submit">
            Send Message
            <Icon name="send" size={16} />
          </button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
