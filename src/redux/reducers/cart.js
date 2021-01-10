const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getTotalPrice = (array) =>
  array.reduce((accCount, curItem) => {
    return curItem.price + accCount;
  }, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART':
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount: totalCount,
        totalPrice: totalPrice,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    case 'REMOVE_CART_ITEM':
      const newItemsForDelete = {
        ...state.items,
      };
      const currentTotalPrice = newItemsForDelete[action.payload].totalPrice;
      const currentTotalCount = newItemsForDelete[action.payload].items.length;
      delete newItemsForDelete[action.payload];
      return {
        ...state,
        items: newItemsForDelete,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    case 'PLUS_ITEM': {
      const newItemsAfterPlus = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newObjItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsAfterPlus,
          totalPrice: getTotalPrice(newItemsAfterPlus),
        },
      };
      const totalCount = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].totalPrice + sum,
        0
      );
      return {
        ...state,
        items: newObjItems,
        totalCount,
        totalPrice,
      };
    }
    case 'MINUS_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newItemsAfterMinus =
        oldItems.length > 1 ? oldItems.slice(1) : oldItems;
      const newObjItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsAfterMinus,
          totalPrice: getTotalPrice(newItemsAfterMinus),
        },
      };
      const totalCount = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].totalPrice + sum,
        0
      );
      return {
        ...state,
        items: newObjItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
