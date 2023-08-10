import React from 'react'

function Item({ id, quantity, description, packed, onDeleteItem }) {
  return (
    <li>
      <span style={ packed ? { textDecoration: "line-through" } : {} }>{ quantity } { description }</span>
      <button onClick={ () => onDeleteItem(id) }>❌</button>
    </li>
  )
}

export default Item