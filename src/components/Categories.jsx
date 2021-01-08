import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => {
            onClickCategory(null);
          }}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => {
              onClickCategory(index);
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


Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
