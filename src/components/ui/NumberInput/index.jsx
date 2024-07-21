import PropTypes from 'prop-types'

// Number input component
function NumberInput({ id, name, value, label, onChange, labelClassName, inputClassName }) {
  return (
    <label htmlFor={id} className={`text-md font-semibold fc-dim-gray ${labelClassName}`}>
      {label} {/* Display label text */}
      <input
        type="number"
        name={name}
        id={id} 
        value={value}
        className={`text-md font-bold ${inputClassName}`}
        onChange={onChange}
      />
    </label>
  )
}

// Define prop types for type checking
NumberInput.propTypes = {
  id: PropTypes.string, // ID for the input element
  name: PropTypes.string, // Name attribute for the input
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Value of the input
  label: PropTypes.string, // Label text for the input
  onChange: PropTypes.func, // Function to handle input changes
  label_className: PropTypes.string, // Additional class names for the label
  input_className: PropTypes.string // Additional class names for the input
}

export default NumberInput
