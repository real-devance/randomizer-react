import randomNumber from "./randomNumber"

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * 
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} The shuffled array.
 * 
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffled = shuffleArray(numbers);
 * console.log(shuffled); // Output could be [3, 1, 4, 5, 2] or any permutation.
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = randomNumber(0, i);
        // Swap elements at index i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}

export default shuffleArray;
