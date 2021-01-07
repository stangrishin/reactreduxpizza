import React, { useEffect } from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { /*connect,*/ useDispatch } from 'react-redux';
/*import axios from 'axios';*/
import { setPizzas /*as setPizzasAction */ } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then((response) => response.json())
      .then((json) => dispatch(setPizzas(json)));
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
//Let's try to rewrite it on class component

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className='wrapper'>
//         <Header />
//         <div className='content'>
//           <Route
//             exact
//             path='/'
//             render={() => <Home items={this.props.items} />}
//           />
//           <Route exact path='/cart' component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
