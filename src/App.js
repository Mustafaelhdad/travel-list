import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  const handleAddItem = (item) => {
    setItems(items => [...items, item])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={ handleAddItem } />
      <PackingList items={ items } />
      <Stats />
    </div>
  );
}

export default App;
