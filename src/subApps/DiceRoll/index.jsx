import styles from './diceRoll.module.css' 
import randomNumber from '../../utils/randomNumber' // Import function to generate random number
import diceIcons from './DiceIcon' // Import dice icons
import PrimaryBtn from '../../components/ui/PrimaryBtn' 
import { useState } from 'react'
import { motion } from 'framer-motion'

const diceRollVariants = {
  rollDice: {
    borderRadius: ["50%", "0%"],
    transform: [
      "rotate(540deg) scale(1.1)",
      "rotate(0deg) scale(1)",
    ],

    opacity: [0.5, 1],
   
  },


  rollDiceB: {
    borderRadius: ["55%", "0%"],
    transform: [
      "rotate(-540deg) scale(1.12)",
      "rotate(0deg) scale(1)",
    ],

    opacity: [0.45, 1],
  },


  transition: {
    duration: 0.5,
    ease: "easeInOut",
    times: [0, 1]
  }
}



function DiceRoll() {
  // State variable to store random outcome (initially set to 1)
  const [randomOutcome, setRandomOutcome] = useState(1)
  const [triggerRollAnimation, setTriggerRollAnimation] = useState(false) // State to trigger flip animation


  // Function to handle dice roll
  const handleRollDice = () => {
    // Update randomOutcome with a random number between 1 and 6
    setRandomOutcome(randomNumber(1, 6))
    setTriggerRollAnimation(!triggerRollAnimation)
  }

  
  return (
    <>
      {/* Dice Roll title */}
      <h1 className={`${styles.title_heading} font-bold`}>DICE ROLL</h1>

      {/* Dice roll section */}
      <section className={styles.dice_roll_container}>
        {/* Dice box to display the dice icon based on randomOutcome */}
        <motion.div
          variants={diceRollVariants}
          initial={false}
          animate={triggerRollAnimation ? "rollDice" : "rollDiceB"}
          transition={diceRollVariants.transition}
          className={styles.dice_box}>

          <img src={diceIcons[randomOutcome]} alt="dice icon" />
        </motion.div>

        {/* Button to trigger dice roll */}
        <PrimaryBtn btnName="Roll Dice" value="diceRoll" onClick={handleRollDice}/> {/* Dice Roll button */}
        
      </section>
    </>
  )
}

export default DiceRoll 
