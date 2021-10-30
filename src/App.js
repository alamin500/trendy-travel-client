import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import AddServices from "./components/AddServices/AddServices";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import MyBooking from "./components/MyBooking/MyBooking";
import BookTour from "./components/BookTour/BookTour";
import ConfirnOrder from "./components/ConfirmOrder/ConfirnOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/mybook">
            <MyBooking></MyBooking>
          </Route>
          <Route path="/login/:tourId">
            <Login></Login>
          </Route>
          <Route path="/confirmOrder">
            <ConfirnOrder></ConfirnOrder>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/bookTour/:tourId">
            <BookTour></BookTour>
          </Route>
          <Route path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
