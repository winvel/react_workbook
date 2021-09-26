import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./pages/InputForm";
import ViewAll from "./pages/ViewAll";

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
          <Route path="/viewall">
            <ViewAll />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
