import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Wasteitem from "./containers/Wasteitem";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewWasteItem from "./containers/NewWasteItem";

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/waste_items/new" exact component={Wasteitem} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />

        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />

    </Switch>;