export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));

  fetch(
    `/pizzas?${
      category !== null ? `category=${category}` : ''
    }&_sort=${sortBy}&_order=asc`
  )
    .then((response) => response.json())
    .then((json) => {
      dispatch(setLoaded(true));
      dispatch(setPizzas(json));
    });
};

export const setPizzas = (pizzaType) => ({
  type: 'SET_PIZZAS',
  payload: pizzaType,
});
