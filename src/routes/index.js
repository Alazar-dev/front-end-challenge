import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path to="/" component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}
