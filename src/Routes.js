import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Wasteitem from "./containers/Wasteitem";
import Resident from "./containers/Resident";
import Collector from "./containers/Collector";
import Site from "./containers/Site";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewWasteItem from "./containers/NewWasteItem";

export default (props, state) =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/waste-items/new" exact component={Wasteitem} />
        <Route path="/resident" exact component={Resident} />
        <Route path="/collector" exact component={Collector} />
        <Route path="/site" exact component={Site} />
        <Route path="/signin" exact component={Login} />
        <Route path="/signup" exact component={Signup} />

        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />

    </Switch>;

