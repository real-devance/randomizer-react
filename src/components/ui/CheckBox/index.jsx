import PropTypes from 'prop-types'
import styles from './checkBox.module.css'

// CheckBox component 
function CheckBox({ id, name, value, checked, onChange, label }) {
    return (
        <label htmlFor={id} className={styles.check_box}>
            <input
                type="checkbox" 
                name={name}
                className={styles.check_marker}
                id={id} 
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="text-base font-semibold">{label}</span> {/* Display label text */}
        </label>
    )
}

// Define prop types for type checking
CheckBox.propTypes = {
    id: PropTypes.string, // ID for the input element
    name: PropTypes.string, // Name attribute for the input
    value: PropTypes.string, // Value of the checkbox
    checked: PropTypes.bool, // Checked state of the checkbox
    onChange: PropTypes.func, // Function to handle changes
    label: PropTypes.string // Label text for the checkbox
}

export default CheckBox
