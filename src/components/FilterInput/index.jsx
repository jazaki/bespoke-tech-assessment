import React from 'react'
import Form from 'react-bootstrap/Form';

const TextFilter = ({
  placeholder,
  value,
  onChange
}) => {
  return (
    <Form.Control
      placeholder={placeholder}
      aria-label={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

const SelectFilter = ({
  options,
  value,
  onChange,
  defaultOption
}) => {
  return (
    <Form.Select
      value={value}
      onChange={(event) => onChange(event.target.value)}  
    >
      <option value="">{defaultOption}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>{option.title}</option>
      ))}
    </Form.Select>
  )
}

export {
  TextFilter,
  SelectFilter
}