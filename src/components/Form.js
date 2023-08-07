import React, { useState } from 'react'

function Form() {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [items, setItems] = useState([])

  const handleAddItem = (item) => {
    setItems(items => [...items, item])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem)

    handleAddItem(newItem)

    setDescription("")
    setQuantity(0)
  }

  return (
    <form className='add-form' onSubmit={ handleSubmit }>
      <h3>What do you need for your trip?</h3>

      <select value={ quantity } onChange={ (e) => setQuantity(+e.target.value) }>
        { Array.from({ length: 20 }, (_, i) => i + 1).map(num =>
          <option value={ num } key={ num }>{ num }</option>) }
      </select>

      <input type="text" placeholder='Item...' value={ description } onChange={ (e) => setDescription(e.target.value) } />
      <button>Add</button>
    </form>
  )
}

export default Form