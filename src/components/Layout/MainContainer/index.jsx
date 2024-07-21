import React from 'react'
import PropTypes from 'prop-types'
import styles from './mainContainer.module.css'

// MainContainer component that holds the background of the app
function MainContainer({ lightColor, darkColor, children }) {
  return (
    <main
      className={styles.main_container}
      style={{
        // Apply dynamic background colors through CSS variables
        '--bg-color-light': lightColor,
        '--bg-color-dark': darkColor,
      }}
    >
      {children} {/* Render children components */}
    </main>
  )
}

// Define prop types for type checking
MainContainer.propTypes = {
  lightColor: PropTypes.string, // Light background color
  darkColor: PropTypes.string,  // Dark background color
  children: PropTypes.node, // Child elements to be rendered inside the container
}

export default MainContainer
