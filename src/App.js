import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import ContactUs from "./components/Appointment/Appointment";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          {/* header route */}
          <Header></Header>
          {/* all page route */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>

            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/contactus">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            {/* not found page route */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* footer route */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
