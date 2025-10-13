import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Award, Users, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const skills = [
    {
      icon: Camera,
      title: 'Cinematography',
      description: 'Expert in visual storytelling, composition, and camera movement'
    },
    {
      icon: Zap,
      title: 'Lighting Design',
      description: 'Master of natural and artificial lighting techniques'
    },
    {
      icon: Award,
      title: 'Color Grading',
      description: 'Creating unique visual moods and atmospheres'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with directors and creative teams'
    }
  ]

  const equipment = [
    'ARRI Alexa Mini LF',
    'RED Komodo 6K',
    'Sony FX6',
    'Cooke S4/i Lenses',
    'Zeiss Supreme Primes',
    'DJI Ronin 4D',
    'ARRI SkyPanel',
    'Aputure 600D Pro'
  ]

  const achievements = [
    'Sundance Film Festival - Best Cinematography',
    'Cairo International Film Festival - Special Mention',
    'Vimeo Staff Pick - 15+ Projects',
    'Cannes Short Film Corner - Official Selection',
    'Dubai International Film Festival - Nominee'
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-intro">
              Crafting visual stories that resonate with the soul.
            </p>
            <p>
              I'm Adham Atef, a Director of Photography based in Cairo, Egypt,
              with a passion for creating cinematic experiences that move audiences.
              With over a decade behind the camera, I've had the privilege of working
              on feature films, commercials, music videos, and documentaries across
              Egypt and the region.
            </p>
            <p>
              My approach combines technical precision with artistic vision. I believe
              that every project is an opportunity to push boundaries, experiment with
              light, and tell stories that matter. Whether it's the golden hour in the
              desert or the neon glow of city streets, I find beauty in every frame.
            </p>
            <p>
              I collaborate with directors, brands, and artists who share my commitment
              to visual excellence and authentic storytelling. Let's create something
              extraordinary together.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/src/pub/554743008_24637609772600095_7436213442032546932_n.jpg"
              alt="Adham Atef"
            />
          </motion.div>
        </div>

        <motion.div
          className="about-skills"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Icon size={40} />
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="about-details">
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <h3>Equipment</h3>
            <ul className="equipment-list">
              {equipment.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.3 + i * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
          >
            <h3>Awards & Recognition</h3>
            <ul className="achievements-list">
              {achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.5 + i * 0.05 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
