import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const regions = [
    {
      title: 'Egypt',
      company: 'Director of Photography',
      location: 'Cairo, Egypt',
      email: 'adham.atef@gmail.com',
      phone: '+20 100 026 0092'
    }
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/adhamatef1988', handle: 'Adham Atef' },
    { icon: Youtube, label: 'Vimeo', url: 'https://vimeo.com/adhamatef', handle: 'adhamatef' }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Let's Create Together</h2>
          <p className="contact-intro">
            Ready to bring your vision to life? Let's collaborate on something extraordinary.
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <h3>{region.title}</h3>
              <p className="company">{region.company}</p>
              
              <div className="contact-info">
                <div className="info-item">
                  <MapPin size={18} />
                  <span>{region.location}</span>
                </div>
                <div className="info-item">
                  <Mail size={18} />
                  <a href={`mailto:${region.email}`}>{region.email}</a>
                </div>
                <div className="info-item">
                  <Phone size={18} />
                  <a href={`tel:${region.phone}`}>{region.phone}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="social-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3>Follow My Journey</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                  <span>{social.handle}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="cta-text">
            Have a project in mind? Let's discuss how we can create something amazing together.
          </p>
          <motion.a
            href="mailto:adham.atef@gmail.com"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
