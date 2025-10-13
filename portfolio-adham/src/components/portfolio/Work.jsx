import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ExternalLink } from 'lucide-react'

const Work = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Midnight Stories',
      category: 'feature',
      year: '2024',
      description: 'A cinematic journey through the streets of Cairo at night. Capturing the soul of the city through dramatic lighting and intimate moments.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=1000&fit=crop',
      tags: ['Feature Film', 'Drama', 'Night Photography']
    },
    {
      id: 2,
      title: 'Urban Echoes',
      category: 'commercial',
      year: '2024',
      description: 'High-end commercial for a luxury brand. Modern aesthetics meet traditional craftsmanship.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=1000&fit=crop',
      tags: ['Commercial', 'Luxury', 'Urban']
    },
    {
      id: 3,
      title: 'Silent Waves',
      category: 'music-video',
      year: '2023',
      description: 'Ethereal music video shot on the Red Sea coast. Playing with natural light and water reflections.',
      image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&h=1000&fit=crop',
      tags: ['Music Video', 'Nature', 'Experimental']
    },
    {
      id: 4,
      title: 'Desert Dreams',
      category: 'documentary',
      year: '2023',
      description: 'Documentary exploring life in the Egyptian desert. Raw, authentic, and deeply moving.',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=1000&fit=crop',
      tags: ['Documentary', 'Desert', 'Cultural']
    },
    {
      id: 5,
      title: 'Neon Nights',
      category: 'short-film',
      year: '2023',
      description: 'Cyberpunk-inspired short film. Pushing boundaries with color grading and dynamic camera work.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=1000&fit=crop',
      tags: ['Short Film', 'Sci-Fi', 'Neon']
    },
    {
      id: 6,
      title: 'Golden Hour',
      category: 'commercial',
      year: '2022',
      description: 'Fashion commercial celebrating Egyptian heritage with modern twist.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=1000&fit=crop',
      tags: ['Commercial', 'Fashion', 'Heritage']
    },
    {
      id: 7,
      title: 'Reflections',
      category: 'feature',
      year: '2024',
      description: 'Psychological thriller exploring identity and memory through visual metaphors.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=1000&fit=crop',
      tags: ['Feature Film', 'Thriller', 'Psychological']
    },
    {
      id: 8,
      title: 'Rhythm & Light',
      category: 'music-video',
      year: '2024',
      description: 'High-energy music video with innovative lighting techniques and choreography.',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=1000&fit=crop',
      tags: ['Music Video', 'Dance', 'Lighting']
    },
    {
      id: 9,
      title: 'Heritage Unveiled',
      category: 'documentary',
      year: '2023',
      description: 'Documenting ancient Egyptian crafts and the artisans keeping traditions alive.',
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=1000&fit=crop',
      tags: ['Documentary', 'Heritage', 'Crafts']
    },
    {
      id: 10,
      title: 'Velocity',
      category: 'commercial',
      year: '2024',
      description: 'Automotive commercial showcasing speed, power, and precision.',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=1000&fit=crop',
      tags: ['Commercial', 'Automotive', 'Action']
    },
    {
      id: 11,
      title: 'Whispers',
      category: 'short-film',
      year: '2022',
      description: 'Intimate short film about human connection in the digital age.',
      image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=1000&fit=crop',
      tags: ['Short Film', 'Drama', 'Intimate']
    },
    {
      id: 12,
      title: 'Pulse',
      category: 'music-video',
      year: '2024',
      description: 'Electronic music video with synchronized lighting and visual effects.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=1000&fit=crop',
      tags: ['Music Video', 'Electronic', 'VFX']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'feature', label: 'Feature Films' },
    { id: 'commercial', label: 'Commercials' },
    { id: 'music-video', label: 'Music Videos' },
    { id: 'documentary', label: 'Documentaries' },
    { id: 'short-film', label: 'Short Films' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="work" className="work-section">
      <div className="container">
        <WorkHeader />
        
        <FilterBar
          categories={categories}
          activeFilter={filter}
          setFilter={setFilter}
        />

        <motion.div layout className="work-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

const WorkHeader = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="work-header"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Selected Work</h2>
      <p className="work-intro">
        A collection of projects that define my visual language and storytelling approach.
      </p>
    </motion.div>
  )
}

const FilterBar = ({ categories, activeFilter, setFilter }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="filter-bar"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {categories.map((cat, index) => (
        <motion.button
          key={cat.id}
          className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
          onClick={() => setFilter(cat.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {cat.label}
        </motion.button>
      ))}
    </motion.div>
  )
}

const ProjectCard = ({ project, index, onClick }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="work-item"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ y: -10 }}
    >
      <div className="work-image-wrapper">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="work-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Play size={48} />
        </motion.div>
      </div>

      <motion.div
        className="work-info"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        <div className="work-meta">
          <span className="work-year">{project.year}</span>
          <span className="work-category">{project.tags[0]}</span>
        </div>
        <h3 className="work-title">{project.title}</h3>
        <p className="work-description">{project.description}</p>
      </motion.div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="modal-content">
            <div className="modal-meta">
              <span>{project.year}</span>
              <span>{project.tags[0]}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            
            <div className="modal-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <button className="modal-cta">
              <ExternalLink size={20} />
              View Full Project
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Work
