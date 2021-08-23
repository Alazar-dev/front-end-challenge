import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome";
import NameAuth from "../pages/NameAuth";
import EmailAuth from "../pages/EmailAuth";
import UserPreference from "../pages/UserPreference";
import Avatar from "../pages/Avatar";
import Success from "../pages/Success";
import StartOver from "../pages/StartOver";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/auth" component={NameAuth} />
        <Route exact path="/emailAuth" component={EmailAuth} />
        <Route exact path="/userpreference" component={UserPreference} />
        <Route exact path="/avatar" component={Avatar} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/startover" component={StartOver} />
      </Switch>
    </BrowserRouter>
  );
}
