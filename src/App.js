import React, { useEffect } from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
// import store from './redux/store'
// function App() {

//   useEffect(() => {
//     fetch('http://localhost:3000/db.json').then((response)=>response.json()).then((json)=>{setPizzas(json.pizzas)})
//   }, [])

//   return (
//     <div className='wrapper'>
//       <Header />
//       <div className='content'>
//         <Route exact path='/' render={()=><Home items={pizzas}/>} />
//         <Route exact path='/cart' component={Cart} />
//       </div>
//     </div>
//   );
// }
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route
            exact
            path='/'
            render={() => <Home items={this.props.items} />}
          />
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
