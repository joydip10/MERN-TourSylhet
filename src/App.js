import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddEvents from './Components/AddEvents/AddEvents';
import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import OrderPlace from './Components/OrderPlace/OrderPlace';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyEvents from './Components/MyEvents/MyEvents';
import ManageEvents from './Components/ManageEvents/ManageEvents';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/myEvents">
            <MyEvents></MyEvents>
          </PrivateRoute>
          <PrivateRoute exact path="/addEvents">
            <AddEvents></AddEvents>
          </PrivateRoute>
          <PrivateRoute exact path="/manageEvents">
            <ManageEvents></ManageEvents>
          </PrivateRoute>
          <PrivateRoute exact path="/orderPlace/:id">
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
