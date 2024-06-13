import React, { useState, useEffect } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Initial data
    const initialItems = [
      { name: 'Item 1' },
      { name: 'Item 2' },
    ];
    setItems(initialItems);
  }, []);

  const handleAddOrUpdateItem = () => {
    if (itemName.trim() === '') return;

    if (editIndex !== null) {
      // Update item
      const updatedItems = [...items];
      updatedItems[editIndex].name = itemName;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      // Add new item
      setItems([...items, { name: itemName }]);
    }

    setItemName('');
  };

  const handleEditItem = (index) => {
    setItemName(items[index].name);
    setEditIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>CRUD Application</h1>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddOrUpdateItem}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {item.name}
            <button onClick={() => handleEditItem(index)} style={{ marginLeft: '10px' }}>Edit</button>
            <button onClick={() => handleDeleteItem(index)} style={{ marginLeft: '5px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

