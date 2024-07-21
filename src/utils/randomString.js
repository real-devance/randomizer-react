import randomNumber from "./randomNumber"

/**
 * Generates a random string of a specified length using characters from the provided string.
 * 
 * @param {string} str - The string from which characters are randomly selected.
 * @param {number} [maxLen=0] - The length of the resulting random string. Defaults to 0.
 * @returns {string} The generated random string of length `maxLen`.
 */
const randomString = (str, maxLen = 0) => {
   
    // Array to hold the randomly selected characters
    const resultStr = []

    // Generate `maxLen` random characters from `str`
    for (let i = 0; i < maxLen; i++) {
        // Get a random index within the bounds of the input string
        const idx = randomNumber(0, str.length - 1)
        // Append the character at the random index to the result array
        resultStr.push(str.charAt(idx))
    }

    // Join the array into a single string and return it
    return resultStr.join('')
}

export default randomString
