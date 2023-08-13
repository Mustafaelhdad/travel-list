import React from 'react'

function Item({ id, quantity, description, packed, onDeleteItem, handleToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={ packed } onChange={ () => { handleToggleItem(id) } } />
      <span style={ packed ? { textDecoration: "line-through" } : {} }>{ quantity } { description }</span>
      <button onClick={ () => onDeleteItem(id) }>❌</button>
    </li>
  )
}

export default Item