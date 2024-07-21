import PropTypes from 'prop-types'
import styles from './sideMenu.module.css'
import iconCross from '../../../assets/icons/Common_Icons/icon-cross.svg'
import MenuBtn from '../../ui/MenuBtn'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// SideMenu component with a sliding menu and navigation options
function SideMenu({ handleSubApp, handleCloseMenu, isMenuOpen }) {
  const sideMenuRef = useRef(null)

  // Close the menu if clicking outside of it
  const handleOutsideClick = (e) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
      handleCloseMenu()
    }
  }

  // Add event listener for clicks outside the menu
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className={`${styles.side_overlay}`}>

      <motion.aside
        initial={{ x: -100 }} // Start menu off-screen
        animate={{ x: isMenuOpen ? 0 : -100 }} // Animate menu in and out
        transition={{ duration: 0.1, ease: 'easeInOut' }} // Smooth transition
        className={`${styles.side_menu} no-scroll-bar-Y`}
        ref={sideMenuRef}>

        <div className={styles.side_menu_top}>
          <button className={styles.close_btn} onClick={handleCloseMenu}>
            <img src={iconCross} alt="close" className="icon-close" />
          </button>
        </div>

        <nav className={styles.side_menu_nav}>
          <MenuBtn btnName="Coin Toss" value="coinToss" onClick={handleSubApp}/>
          <MenuBtn btnName="Dice Roll" value="diceRoll" onClick={handleSubApp}/>
          <MenuBtn btnName="Pick Shuf" value="pickShuf" onClick={handleSubApp}/>
          <MenuBtn btnName="Random Number" value="randomNumber" onClick={handleSubApp}/>
          <MenuBtn btnName="Random Password" value="randomPassword" onClick={handleSubApp}/>
        </nav>
      </motion.aside>
    </div>
  )
}

// Define prop types for type checking
SideMenu.propTypes = {
  handleSubApp: PropTypes.func, // Function to handle navigation clicks
  handleCloseMenu: PropTypes.func, // Function to close the menu
  isMenuOpen: PropTypes.bool // Flag to control menu visibility
}

export default SideMenu
