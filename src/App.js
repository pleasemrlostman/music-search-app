import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./components/Detail/Detail";
import GlobalStyles from "./components/GlobalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <HashRouter>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/detail" component={Detail} />
            </HashRouter>
        </div>
    );
}

export default App;
