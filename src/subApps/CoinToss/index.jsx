import styles from './coinToss.module.css' 
import randomNumber from '../../utils/randomNumber' // Import function to generate random number
import PrimaryBtn from '../../components/ui/PrimaryBtn' 
import { useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants for coin flip
const coinFlipVariants = {
  flip: {
    rotateX: [0, 180, 0] // Flip animation
  },
  flipB: {
    rotateX: [0, -180, 0] // Reverse flip animation
  },
  text: {
    opacity: [0, 0.5, 1] // Text fade in
  },
  textB: {
    opacity: [0, 0.55, 1] // Reverse text fade in
  },
  transition: {
    duration: 0.6, // Animation duration
    ease: "easeIn", // Easing function
    times: [0, 0.5, 1] // Keyframes
  }
}

// CoinToss component to flip a coin and show result
function CoinToss() {
  const outcomes = ['Head', 'Tail'] // Possible outcomes of the coin toss

  // State variables
  const [randomOutcome, setRandomOutcome] = useState(0) // Current outcome index
  const [triggerFlipAnimation, setTriggerFlipAnimation] = useState(false) // Animation trigger

  // Handle coin flip
  const handleFlipCoin = () => {
    setRandomOutcome(randomNumber(0, 1)) // Set new outcome
    setTriggerFlipAnimation(!triggerFlipAnimation) // Trigger animation
  }

  return (
    <>
      <h1 className={`font-bold ${styles.title_heading}`}>COIN TOSS</h1> {/* Title */}
      <section className={styles.coin_toss_container}>
        <motion.div
          variants={coinFlipVariants}
          initial={false}
          transition={coinFlipVariants.transition}
          animate={triggerFlipAnimation ? "flip" : "flipB"} // Apply flip animation
          className={styles.coin_circle}
        >
          <motion.h2
            variants={coinFlipVariants}
            initial={false}
            animate={triggerFlipAnimation ? "text" : "textB"} // Apply text opacity animation
            className="text-3xl font-bold"
          >
            {outcomes[randomOutcome]} {/* Show result */}
          </motion.h2>
        </motion.div>
        
        <PrimaryBtn btnName="Flip It" value='coinToss' onClick={handleFlipCoin}/> {/* Flip button */}
      </section>
    </>
  )
}

// Export component
export default CoinToss 
