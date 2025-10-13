import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Adham Atef. All rights reserved.
          </p>
          <p className="footer-tagline">
            Crafted with <Heart size={16} className="heart-icon" /> for visual storytelling
          </p>
          <p className="footer-quote">
            "Every frame tells a story."
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
