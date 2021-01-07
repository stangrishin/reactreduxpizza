import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => {
            setActiveItem(null);
            onClickItem(null);
          }}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => {
              onClickItem(index);
              setActiveItem(index);
            }}
            key={name}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
