
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import {TemplateProvider} from './Template/TemplateProvider'
function App() {
  return (
    <TemplateProvider >
     <Provider store={store}>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />       
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/product/:id' component={ProductDetail} />
       
      </Switch>
      </BrowserRouter>
      </Provider>
      </TemplateProvider>
  );
}

export default App;
