import PropTypes from 'prop-types'
import styles from './header.module.css'
import iconMenu from '../../../assets/icons/Common_Icons/icon-menu.svg' // Importing menu icon

// Header Component
function Header({ handleOpenMenu }) {
  return (
    <header className={styles.header_container}>
      <button className="icon-menu" onClick={handleOpenMenu}>
        <img src={iconMenu} alt='menu'/> {/* menu icon */}
      </button>
      <img src="/Logo.svg" alt="Randomizer" className="logo"/> {/* application logo */}
    </header>
  )
}

// Define prop types for type checking
Header.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired, // Function to handle opening the menu
}

export default Header // Export Header component
