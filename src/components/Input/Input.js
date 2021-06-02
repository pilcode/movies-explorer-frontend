import React from 'react';
import './Input.css'

function Input(props) {
  const {
    className = '',
    type = 'text',
    label = '',
    placeholder = '',
    validity = {},
    onChange = () => {},
    value: initialValue,
    onValidate = () => {},
    disabled = false,
    inline,
    customErrorMessage = ''
  } = props

  const [value, setValue] = React.useState('');
  const [errorMassage, setErrorMassage] = React.useState('');

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const inputRef = React.useRef(null)

  function handleChange(e) {
    setValue(e.target.value);
    onChange(e.target.value)
    const isValidity = inputRef.current.checkValidity()
    const message = !isValidity
      ? customErrorMessage || inputRef.current.validationMessage
      : ''
    onValidate(isValidity)
    setErrorMassage(message);
  }

  const getClassWithMod = (name) => {
    if (!inline) {
      return name
    } else {
      return `${name} ${name}_inline`
    }
  }

  return (
    <label className={className ? `${getClassWithMod('input')} ${className}` : getClassWithMod('input')}>
      {!!label && ( <span className={getClassWithMod('input__label')}>{label}</span> )}
      <input
        ref={inputRef}
        className={getClassWithMod('input__field')}
        type={type}
        onChange={handleChange}
        value={value || ''}
        placeholder={placeholder}
        { ...validity }
        disabled={disabled}
      />
      <span className={getClassWithMod('input__error')}>{errorMassage}</span>
    </label>
  );
}

export default Input;
