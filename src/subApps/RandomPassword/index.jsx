import styles from './randomPassword.module.css'
import Slider from '../../components/ui/Slider'
import CheckBox from '../../components/ui/CheckBox'
import randomString from '../../utils/randomString' // Import function to generate random string
import PrimaryBtn from '../../components/ui/PrimaryBtn'
import { useEffect, useRef, useState } from 'react'

// Character sets for password generation
const characters = {
    upperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerChars: 'abcdefghijklmnopqrstuvwxyz',
    numChars: '0123456789',
    specialChars: '~`!@#$%^&*-_'
}

function RandomPassword() {
    // State variables for password length, character types, and generated password
    const [passwordLength, setPasswordLength] = useState(8)
    const [charType, setCharType] = useState({
        upperCase: false,
        lowerCase: true,
        numberCase: true,
        specialCase: false,
    })
    const [password, setPassword] = useState('')
    const passwordRef = useRef('')

    // Handle changes to password length
    const handlePasswordLength = (e) => {
        const val = Number(e.target.value)
        setPasswordLength(val)
    }

    // Handle changes to character type checkboxes
    const handleCheckBox = (e) => {
        const { value, checked } = e.target
        setCharType((prev) => ({
            ...prev,
            [value]: checked,
        }))
    }

    // Determine which characters to include in the password
    const charactersToInclude = () => {
        const { upperCase, lowerCase, numberCase, specialCase } = charType
        const { upperChars, lowerChars, numChars, specialChars } = characters

        let characterInclude = ''

        if (upperCase) characterInclude += upperChars
        if (lowerCase) characterInclude += lowerChars
        if (numberCase) characterInclude += numChars
        if (specialCase) characterInclude += specialChars

        return characterInclude
    }

    // Generate a random password based on selected characters and length
    const handleGeneratePassword = () => {
        const characters = charactersToInclude()
        const randomPassword = randomString(characters, passwordLength)
        setPassword(randomPassword)
    }

    // Copy the generated password to the clipboard
    const copyTextToClipboard = async () => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }

    // Generate a new password whenever character types or length change
    useEffect(() => {
        const characters = charactersToInclude()
        const randomPassword = randomString(characters, passwordLength)
        setPassword(randomPassword)

        return () => {
            setPassword('')
        }
    }, [])

    return (
        <>
            <h1 className={`${styles.title_heading}`}>Random Password</h1>

            <section className={styles.random_password_container}>

                <div className={styles.output_box}>
                    <input
                        type="text"
                        id="passwordField"
                        value={password || 'At least one checkbox must be selected'}
                        readOnly
                        className={`text-xl font-bold wrap-word ${styles.password_field}`}
                        ref={passwordRef}
                    />
                    <button
                        className={`text-sm fc-dark-charcoal font-bold ${styles.copy_btn}`}
                        onClick={copyTextToClipboard}>Copy</button>
                </div>

                <div className={`${styles.input_box}`}>
                    <Slider
                        id='passwordLength'
                        name='passwordLength'
                        min={1}
                        max={16}
                        value={passwordLength}
                        onChange={handlePasswordLength}
                        label='Length of Password'
                        currentValue={passwordLength} />

                    <div className={`${styles.char_type}`}>
                        <CheckBox
                            id='upperCase'
                            name='charType'
                            value='upperCase'
                            checked={charType.upperCase}
                            onChange={handleCheckBox}
                            label='UPPERCASE'
                        />
                        <CheckBox
                            id='lowerCase'
                            name='charType'
                            value='lowerCase'
                            checked={charType.lowerCase}
                            onChange={handleCheckBox}
                            label='lowerCase'
                        />
                        <CheckBox
                            id='numberCase'
                            name='charType'
                            value='numberCase'
                            checked={charType.numberCase}
                            onChange={handleCheckBox}
                            label='Number'
                        />
                        <CheckBox
                            id='specialCase'
                            name='charType'
                            value='specialCase'
                            checked={charType.specialCase}
                            onChange={handleCheckBox}
                            label='Special Characters'
                        />
                    </div>
                </div>

                <PrimaryBtn btnName="Generate" value='randomPasswordBtn' onClick={handleGeneratePassword} classname={styles.generate_btn} />
            </section>
        </>
    )
}

export default RandomPassword
