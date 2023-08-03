import React from 'react'

function Item({ quantity, description, packed }) {
  return (
    <li>
      <span style={ packed ? { textDecoration: "line-through" } : {} }>{ quantity } { description }</span>
      <button>❌</button>
    </li>
  )
}

export default Item