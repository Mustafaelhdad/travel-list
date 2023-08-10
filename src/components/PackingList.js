import React from 'react'

import Item from './Item';

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        { items.map((item) => (
          <Item key={ item.id } id={ item.id } quantity={ item.quantity } description={ item.description } packed={ item.packed } onDeleteItem={ onDeleteItem } />
        )) }
      </ul>
    </div>
  )
}

export default PackingList