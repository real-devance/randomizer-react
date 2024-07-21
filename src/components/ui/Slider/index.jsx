import PropTypes from 'prop-types'
import styles from './slider.module.css'

// Slider component
function Slider({ id, name, value, min, max, onChange, currentValue, label }) {
  return (
    <label htmlFor={id} className={styles.slider_container}>
      <div className={styles.slider_track}>
        <span className='text-sm font-medium'>{min}</span>
        <input
          type="range" 
          min={min} 
          max={max} 
          name={name} 
          id={id} 
          value={value}
          onChange={onChange} 
          className={styles.input_slider}
        />
        <span className='text-sm font-medium'>{max}</span> 
      </div>
      <p className="text-sm font-semibold">{label}: {currentValue}</p> 
    </label>
  )
}

// Define prop types for type checking
Slider.propTypes = {
  id: PropTypes.string.isRequired, // ID for the slider input
  name: PropTypes.string, // Name attribute for the slider input
  value: PropTypes.number.isRequired, // Value of the slider
  min: PropTypes.number, // Minimum value of the slider
  max: PropTypes.number, // Maximum value of the slider
  onChange: PropTypes.func.isRequired, // Function to handle slider changes
  currentValue: PropTypes.number.isRequired, // Current value displayed
  label: PropTypes.string.isRequired // Label text for the slider
}

export default Slider
