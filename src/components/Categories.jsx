import React, { useState } from 'react';

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className='categories'>
      <ul>
        <li>Все</li>
        {items.map((name,index) => (
          <li className={activeItem===index?'active':''} onClick={() => setActiveItem(index)} key={name}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
