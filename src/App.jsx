import './App.css'

// Import Header and Side Menu components
import Header from './components/Layout/Header'
import SideMenu from './components/Layout/SideMenu'

// Import the main container component
import MainContainer from './components/Layout/MainContainer'

// Import sub-app components
import CoinToss from './subApps/CoinToss'
import DiceRoll from './subApps/DiceRoll'
import PickShuf from './subApps/PickShuf'
import RandomNumber from './subApps/RandomNumber'
import RandomPassword from './subApps/RandomPassword'

import randomNumber from './utils/randomNumber' //Import random number utility function
import { useState } from 'react'

function App() {
  // List of available sub-apps
  const subApps = ['coinToss', 'diceRoll', 'pickShuf', 'randomNumber', 'randomPassword']
  
  // State for controlling the side menu's open/closed state
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  
  // State for tracking the currently selected sub-app
  const [currentApp, setCurrentApp] = useState(() => {
    const randomIndex = randomNumber(0, subApps.length - 1)
    return subApps[randomIndex]
  })

  // Background colors for each sub-app
  const appBGColors = {
    coinToss: { lightColor: '#F8F4E1', darkColor: '#116D6E' },
    diceRoll: { lightColor: '#ECF2FF', darkColor: '#435585' },
    pickShuf: { lightColor: '#F1EAFF', darkColor: '#6554AF' },
    randomNumber: { lightColor: '#E8EFCF', darkColor: '#99BC85' },
    randomPassword: { lightColor: '#BFCFE7', darkColor: '#1D5B79' },
  }
  
  // Get the background colors for the current app
  const { lightColor, darkColor } = appBGColors[currentApp]

  // Open the side menu
  const handleOpenMenu = () => {
    setIsSideMenuOpen(true)
  }

  // Switch the current app based on user selection
  const handleSubApp = (e) => {
    const val = e.target.value
    setCurrentApp(val)
    setIsSideMenuOpen(false)
  }

  // Close the side menu
  const handleCloseMenu = () => {
    setIsSideMenuOpen(false)
  }

  // Render the currently selected app
  const renderCurrentApp = () => {
    switch (currentApp) {
      case 'coinToss':
        return <CoinToss />
      case 'diceRoll':
        return <DiceRoll />
      case 'pickShuf':
        return <PickShuf />
      case 'randomNumber':
        return <RandomNumber />
      case 'randomPassword':
        return <RandomPassword />
      default:
        return <CoinToss />
    }
  }

  return (
    <>
      <Header handleOpenMenu={handleOpenMenu} />
      
      {isSideMenuOpen && 
        <SideMenu
          isMenuOpen={isSideMenuOpen}
          handleSubApp={handleSubApp}
          handleCloseMenu={handleCloseMenu}
        />
      }

      <MainContainer lightColor={lightColor} darkColor={darkColor}>
        {renderCurrentApp()}
      </MainContainer>
    </>
  )
}

export default App
