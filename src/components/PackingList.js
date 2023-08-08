import React from 'react'

import Item from './Item';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Screens", quantity: 44, packed: true },
];

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        { items.map((item) => (
          <Item key={ item.id } quantity={ item.quantity } description={ item.description } packed={ item.packed } />
        )) }
      </ul>
    </div>
  )
}

export default PackingList