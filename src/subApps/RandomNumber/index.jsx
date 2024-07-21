import styles from './randomNumber.module.css'
import NumberInput from '../../components/ui/NumberInput'
import PrimaryBtn from '../../components/ui/PrimaryBtn'
import randomNumber from '../../utils/randomNumber' // Import function to generate random number
import { useState } from 'react'

function RandomNumber() {

  // State variables for random outcome and input values
  const [randomOutcome, setRandomOutcome] = useState(0)
  const [minValue , setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(10)
  

  // Function to parse input value as an integer
  const parseInput = (value) => {
    if (value === ''){
      return ''
    }

    const parseValue  = parseInt(value)
    return parseValue
  }


  // Handler for minimum value input change
  const handleMinValue = (e) => {
    if (e.target.value.length <= 15){
      const value = parseInput(e.target.value)
      setMinValue(value)
    }
  }

  // Handler for maximum value input change
  const handleMaxValue = (e) => {
    if (e.target.value.length <= 15){
      const value = parseInput(e.target.value)
      setMaxValue(value)
    }
  }


  // Function to generate a random number within the specified range
  const generateNumber = () => {
    if (minValue > maxValue) {
      // Swap min and max values if min is greater than max
      setMinValue(maxValue)
      setMaxValue(minValue)
    }

    const randomValue = randomNumber(minValue, maxValue) // Generate random number
    setRandomOutcome(randomValue) // Update the random outcome state
  }


  return (
    <>
      <h1 className={`${styles.title_heading} font-bold`}>RANDOM NUMBER</h1> {/* Heading for the component */}

      <section className={styles.random_number_container}>

        <div className={styles.output_box}>
          <p className="text-2xl font-bold wrap-word">
            {Number.isFinite(randomOutcome) ? randomOutcome : 'Invalid Number'} {/* Display the random number or error message */}
          </p>
        </div>

        <div className={styles.input_box}>

          <NumberInput
            id='minValue'
            name='minValue'
            value={minValue}
            label="Min"
            inputClassName={styles.input_digit}
            onChange={handleMinValue} // Handle changes to minimum value input
          />

          <NumberInput
            id='maxValue'
            name='maxValue'
            value={maxValue}
            label="Max"
            inputClassName={styles.input_digit}
            onChange={handleMaxValue} // Handle changes to maximum value input
          />

        </div>

        {/* Button to generate a random number */}
        <PrimaryBtn btnName="Generate" value='randomNumberBtn' onClick={generateNumber} classname={styles.generate_btn}/> 
      
      </section>

    </>
  )
}

export default RandomNumber
