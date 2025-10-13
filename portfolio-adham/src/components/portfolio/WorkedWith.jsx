import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WorkedWith = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  // Array of logos - will repeat for infinite scroll effect
  const logos = [
    '/src/spo/1.png',
    '/src/spo/2.png',
    '/src/spo/3.png',
    '/src/spo/4.png',
    '/src/spo/5.png'
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="worked-with-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="worked-with-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Worked With</h2>
          <p className="worked-with-intro">
            Proud to have collaborated with these amazing brands and production companies
          </p>
        </motion.div>

        <motion.div
          className="logos-container"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="logos-track">
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="logo-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + (index % logos.length) * 0.1 }}
              >
                <img src={logo} alt={`Brand ${(index % logos.length) + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkedWith
