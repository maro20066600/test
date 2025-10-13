import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sun, Moon } from 'lucide-react'

function App() {
  const [showAbout, setShowAbout] = useState(false)
  const [currentSponsor, setCurrentSponsor] = useState(0)
  const [showFlash, setShowFlash] = useState(false)
  const [background, setBackground] = useState('bg.png')

  const sponsors = [
    '/assets/spo/1.png',
    '/assets/spo/2.png',
    '/assets/spo/3.png',
    '/assets/spo/4.png',
    '/assets/spo/5.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSponsor((prev) => (prev + 1) % sponsors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleCameraClick = () => {
    // Camera flash sound
    const audio = new Audio('/assets/sound/camera-flash-204151.mp3')
    audio.volume = 0.7
    audio.play().catch(() => {}) // Ignore errors if autoplay is blocked
    
    // Flash effect
    setShowFlash(true)
    setTimeout(() => setShowFlash(false), 800)
  }

  const frames = [
    {
      id: 1,
      image: '/assets/frames/1.png',
      top: '-6%',
      left: '35%',
      width: '500px',
      height: '500px',
    link: 'https://test1-madvs.vercel.app/'
    },
    {
      id: 2,
      image: '/assets/frames/2.png',
      top: '-1%',
      left: '23%',
      width: '350px',
      height: '500px',
      link: 'https://www.facebook.com/tajallymediaproduction/'
    },
    {
      id: 3,
      image: '/assets/frames/3.png',
      top: '1%',
      right: '17%',
      width: '450px',
      height: '450px',
      link: 'https://www.facebook.com/Mo7nkeen/'
    }
  ]

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(/assets/frames/${background})` }}
      />

      {/* Background Toggle Button */}
      <button
        onClick={() => setBackground(bg => bg === 'bg.png' ? 'bg2.png' : 'bg.png')}
        className="absolute top-6 right-6 z-20 p-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title={background === 'bg.png' ? 'Warm' : 'Cold'}
      >
        {background === 'bg.png' ? (
          <Sun className="w-8 h-8 text-orange-400" />
        ) : (
          <Moon className="w-8 h-8 text-blue-300" />
        )}
      </button>

      {/* Worked With Text */}
      <div className="absolute left-[11%] top-[14%]">
        <h2 
          className="text-5xl text-white/95 font-bold" 
          style={{ 
            fontFamily: 'Brush Script MT, cursive',
            textShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.8)',
            letterSpacing: '1px'
          }}
        >
          Worked With
        </h2>
      </div>

      {/* Camera Table Clickable Area */}
      <div 
        className="absolute left-[25%] top-[50%] w-[50%] h-[30%] cursor-pointer z-10"
        onClick={handleCameraClick}
        title="Click the cameras!"
      />

      {/* Flash Effect */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0.8, 1, 0.6, 0.9, 0.4, 0.7, 0.2, 0]
            }}
            transition={{ 
              duration: 0.8,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.85, 1],
              ease: "easeOut"
            }}
            className="fixed inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Sponsor Light Box */}
      <div className="absolute left-[13%] top-[26%] w-48 h-48 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSponsor}
            src={sponsors[currentSponsor]}
            alt="Sponsor"
            initial={{ opacity: -30, x: -40 }}
            animate={{ opacity: 0.8, x: 0 }}
            exit={{ opacity: -30, x: 40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="max-w-full max-h-full object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          />
        </AnimatePresence>
      </div>

      {/* Frames */}
      {frames.map((frame) => (
        <motion.div
          key={frame.id}
          className="absolute cursor-pointer"
          style={{
            top: frame.top,
            left: frame.left,
            right: frame.right,
            transform: frame.transform,
            width: frame.width,
            height: frame.height,
            filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
          }}
          onClick={() => {
            if (frame.link) {
              window.open(frame.link, '_blank')
            } else if (frame.onClick) {
              frame.onClick()
            }
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={frame.image} 
            alt={`Frame ${frame.id}`}
            className="w-full h-full object-contain"
            style={{
              filter: 'brightness(1.05) contrast(1.05)',
            }}
          />
        </motion.div>
      ))}

      {/* About Me Modal */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowAbout(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-950 rounded-lg">
                <div className="p-4 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 relative">
                    <button
                      onClick={() => setShowAbout(false)}
                      className="absolute top-4 left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>

                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-600">
                        <img 
                          src="/assets/frames/1.png" 
                          alt="Adham"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h1 className="text-4xl font-bold text-white mb-2">أدهم</h1>
                      <p className="text-xl text-yellow-500 mb-6">مدير تصوير | Director of Photography</p>
                      
                      <div className="bg-white/5 rounded-lg p-6 text-right">
                        <p className="text-gray-200 text-lg leading-relaxed">
                          مدير تصوير شغوف بفن السينما والتصوير السينمائي. أؤمن بأن كل لقطة تحكي قصة، 
                          وكل إطار يحمل رسالة. أسعى دائماً لتحويل الرؤية الإبداعية إلى واقع بصري مذهل 
                          من خلال فهم عميق للإضاءة، التكوين، والحركة.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
