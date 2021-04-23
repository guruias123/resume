import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import ScreenApi from "./ScreenApi";

import Last from "./Last";

function Routing (){
    return(
        <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/submit' component={Last} />
        <Route path='/display' component={ScreenApi} />

        </BrowserRouter>
    )
}

export default Routing;