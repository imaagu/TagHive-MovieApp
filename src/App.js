import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./container/Main";
import { Login, Movies, Preference, Signup } from "./views";
import { useAuth } from "./hooks";
import { ProtectedRoute } from "./components";

const App = () => {
  return (
    <Main>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute path="/movies" component={Movies} />
        <ProtectedRoute path="/preference" component={Preference} />
        <ProtectedRoute path="/" component={Movies} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Switch>
    </Main>
  );
};

export default App;
