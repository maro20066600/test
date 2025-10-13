import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Film, Award, Lightbulb } from 'lucide-react'

const Story = () => {
  const storyMilestones = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Started my journey with a camera and a dream. Every frame was a lesson, every project a stepping stone.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop'
    },
    {
      year: '2017',
      title: 'First Breakthrough',
      description: 'Directed photography for my first commercial campaign. The lights, the action, the magic of storytelling came alive.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop'
    },
    {
      year: '2019',
      title: 'International Recognition',
      description: 'My work reached global audiences. From Cairo to Dubai, telling stories that transcend borders.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop'
    },
    {
      year: '2022',
      title: 'Feature Films',
      description: 'Stepped into the world of cinema. Every scene, a painting. Every shot, an emotion captured in time.',
      icon: Film,
      image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&h=600&fit=crop'
    }
  ]

  return (
    <section id="story" className="story-section">
      <div className="container">
        <StoryHeader />
        
        <div className="story-timeline">
          {storyMilestones.map((milestone, index) => (
            <StoryMilestone
              key={index}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>

        <StoryPhilosophy />
      </div>
    </section>
  )
}

const StoryHeader = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="story-header"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">My Story</h2>
      <p className="story-intro">
        Every frame tells a story. Mine began with a passion for capturing moments
        that move people, inspire change, and create lasting impressions.
      </p>
    </motion.div>
  )
}

const StoryMilestone = ({ milestone, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const Icon = milestone.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`story-milestone ${isEven ? 'milestone-left' : 'milestone-right'}`}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="milestone-content">
        <motion.div
          className="milestone-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={milestone.image} alt={milestone.title} />
          <div className="milestone-overlay">
            <Icon size={48} />
          </div>
        </motion.div>

        <motion.div
          className="milestone-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="milestone-year">{milestone.year}</span>
          <h3 className="milestone-title">{milestone.title}</h3>
          <p className="milestone-description">{milestone.description}</p>
        </motion.div>
      </div>

      <motion.div
        className="milestone-line"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  )
}

const StoryPhilosophy = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="story-philosophy"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="philosophy-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3>My Philosophy</h3>
        <p className="philosophy-quote">
          "Light is not just illumination—it's emotion. Every shadow tells a story,
          every highlight reveals truth. I don't just capture images; I craft experiences
          that linger in the heart long after the screen fades to black."
        </p>
        <div className="philosophy-signature">— Adham Atef</div>
      </motion.div>
    </motion.div>
  )
}

export default Story
