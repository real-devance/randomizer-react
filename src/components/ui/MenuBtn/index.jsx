import PropTypes from 'prop-types'
import styles from './menuBtn.module.css'

// Menu button component
function MenuBtn({ btnName, value, classname, onClick }) {
  return (
    <button
      className={`text-lg font-bold ${styles.menu_btn} ${classname}`}
      value={value}
      onClick={(e) => onClick(e)} // Handle click event with the provided onClick function
    >
      {btnName} {/* Display the button text */}
    </button>
  )
}

// Define prop types 
MenuBtn.propTypes = {
  btnName: PropTypes.string, // Text displayed on the button
  value: PropTypes.string, // Value attribute of the button
  classname: PropTypes.string, // Additional class names for styling
  onClick: PropTypes.func // Function to handle button clicks
}

export default MenuBtn
