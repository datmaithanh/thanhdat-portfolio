import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contactme'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
        <a href={`tel:${contact.phone}`}>
          <span type='button' className='btn btn--outline'>
            Call me
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
