import styles from './pickShuf.module.css'
import backIcon from '../../assets/icons/Common_Icons/icon-back.svg'
import PrimaryBtn from '../../components/ui/PrimaryBtn' 
import randomNumber from '../../utils/randomNumber'  // Import function to generate random number
import shuffleArray from '../../utils/shuffleArray' // Import function to shuffle array
import { useState } from 'react'

// InputSection component for handling user input and displaying list items
function InputSection({ inputValue, handleInputValue, handleAddItem, handleRemoveItem, arrayItems = [] }) {
  return (
    <section className={styles.input_section}>
      <div className={styles.input_box}>
        {/* Input field for adding list items */}
        <input
          type="text"
          name='userInput'
          placeholder="List Item"
          className={`text-lg font-bold ${styles.user_input}`}
          value={inputValue}
          onChange={handleInputValue} />
        {/* Button to add the item to the list */}
        <button className={`text-2xl font-bold ${styles.action_btn}`} onClick={handleAddItem}>+</button>
      </div>

      <div className={`${styles.list_box} no-scroll-bar-X`}>
        {/* Display list of items with remove button */}
        <ul className={`${styles.input_list_items} no-scroll-bar-Y`}>
          {arrayItems.map((item, index) => (
            <li key={index}>
              <p className={`text-lg font-semibold no-scroll-bar-X ${styles.list_style}`}>
                <span>&#8226;</span>
                <span>{item}</span>
              </p>
              <button className={`text-2xl font-bold ${styles.action_btn}`} onClick={() => handleRemoveItem(index)}>-</button>
            </li>))}
        </ul>
      </div>
    </section>
  )
}

// OutputSection component for displaying picked element and shuffled list
function OutputSection({ pickedElement, shuffleArray, backAction }) {
  return (
    <section className={styles.output_section}>
      <div className={styles.result_box}>
        {/* Button to go back to the input section */}
        <button
          className={styles.back_btn}
          onClick={backAction}>
          <img
            src={backIcon}
            className={styles.icon_back}
            alt="back" />
        </button>

        {/* Display picked element */}
        {pickedElement &&
          <div className={styles.picked_result}>
            <h2 className="text-md font-bold fc-dim-gray">Picked:</h2>
            <p className="text-2xl font-semibold wrap-word">{pickedElement}</p>
          </div>
        }

        {/* Display shuffled list */}
        {shuffleArray.length > 0 &&
          <div className={styles.shuffled_result}>
            <h2 className='text-md font-bold fc-dim-gray'>Shuffled List:</h2>
            <ol className={`${styles.shuffled_list_items} no-scroll-bar-Y`}>
              {shuffleArray.map((item, index) => (
                <li key={index}>
                  <p className={`${styles.list_style} no-scroll-bar-X`}>
                    <span className="text-md font-medium">{index + 1}.</span>
                    <span className="text-lg font-semibold no-scroll-bar-X">{item}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        }
      </div>
    </section>
  )
}

// PickShuf component for handling the overall logic and rendering
function PickShuf() {
  const [inputText, setInputText] = useState('') // State for input text
  const [listItems, setListItems] = useState([]) // State for list items
  const [pickedElement, setPickedElement] = useState('') // State for picked element
  const [shuffleItems, setShuffleItems] = useState([]) // State for shuffled list
  const [isResultDisplay, setIsResultDisplay] = useState(false) // State for toggling result display

  // Handle input text change
  const handleInputText = (e) => {
    const val = e.target.value
    setInputText(val)
  }

  // Add item to the list
  const handleAddItem = () => {
    if (inputText) {
      setListItems((prevList) => [inputText, ...prevList])
      setInputText('')
    }
  }

  // Remove item from the list
  const handleRemoveItem = (indextoRemove) => {
    const updateList = listItems.filter((_, index) => index !== indextoRemove)
    setListItems(updateList)
  }

  // Handle back action to return to input section
  const hanldeBackAction = () => {
    setIsResultDisplay(false)
  }

  // Pick a random element from the list
  const handlePickElement = () => {
    if (listItems.length > 0) {
      const pickedInd = randomNumber(0, listItems.length - 1)
      setPickedElement(listItems[pickedInd])
      setShuffleItems([])
      setIsResultDisplay(true)
    }
  }

  // Shuffle the list items
  const handleShuffleItems = () => {
    if (listItems.length > 0) {
      setShuffleItems(shuffleArray(listItems.slice()))
      setPickedElement('')
      setIsResultDisplay(true)
    }
  }

  return (
    <>
      <h1 className={`${styles.title_heading} font-bold`}>PICK SHUF</h1>
      <section className={styles.pick_shuf_container}>
        {!isResultDisplay &&
          <InputSection
            inputValue={inputText}
            handleInputValue={handleInputText}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            arrayItems={listItems}
          />}
        {isResultDisplay &&
          <OutputSection
            pickedElement={pickedElement}
            shuffleArray={shuffleItems}
            backAction={hanldeBackAction}
          />}
        <div className={styles.btn_section}>
          <PrimaryBtn btnName="Pick" value="pickElement" onClick={handlePickElement} />
          <PrimaryBtn btnName="Shuffle" value="shuffleElement" onClick={handleShuffleItems} />
        </div>
      </section>
    </>
  )
}

export default PickShuf
