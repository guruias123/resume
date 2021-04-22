import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Last from "./Last";

function Routing (){
    return(
        <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/submit' component={Last} />
        </BrowserRouter>
    )
}

export default Routing;