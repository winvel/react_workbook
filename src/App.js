import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import InputForm from "./pages/InputForm";
import PageNotFound from "./pages/Page NotFound";


function App(props) {

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="./register" />
          </Route>
          <Route path="/register">
            <InputForm />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="*" exact>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
