/**
 * Generates a random integer between the specified minimum and maximum values (inclusive)
 *
 * @param {number} min - The minimum integer value
 * @param {number} max - The maximum integer value
 
 */
const randomNumber = (min, max) => {
    if (isNaN(min) || isNaN(max)) {
        return 'Error: invalid number'
    }

    // Swap min and max if min is greater than max
    if (min > max) {
        [min, max] = [max, min]
    }

    // Generate a random integer between min and max (inclusive)
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum
}

export default randomNumber
