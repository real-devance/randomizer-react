import PropTypes from 'prop-types'
import styles from './primaryBtn.module.css'

// Primary button component
function PrimaryBtn({ btnName, value, onClick, classname }) {
  return (
    <button
      className={`text-xl font-bold ${styles.primary_btn} ${classname}`}
      value={value}
      onClick={onClick}
    >
      {btnName}
    </button>
  )
}

// Define prop types 
PrimaryBtn.propTypes = {
  btnName: PropTypes.string, // Text displayed on the button
  value: PropTypes.string, // Value attribute of the button
  onClick: PropTypes.func, // Function to handle button clicks
  classname: PropTypes.string // Additional class names for styling
}

export default PrimaryBtn
