import {BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import NavBar from "./Components/NavBar";
import Account from "./Components/Pages/Account";
import Vender from "./Components/Pages/Vender";
import Footer from "./Components/Footer";
import Catlog from "./Components/Pages/Catlog";
import PineAppartment from "./Components/PineAppartment";
import Register from "./Components/Pages/Register";
import SignIn from "./Components/Pages/SignIn";
import GImg from "./Components/GImg";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catlog} />
        <Route path="/account" component={Account} />
        <Route path="/vender" component={Vender} />
        <Route path="/appartment" component={PineAppartment}/>
        <Route path="/sign_in" component={SignIn}/>
        <Route path="/register" component={Register}/>
        <Route path="/g" component={GImg}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
