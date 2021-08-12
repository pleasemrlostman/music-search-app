import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./routes/Main";
import GlobalStyles from "./components/GlobalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <HashRouter>
                <Route path="/">
                    <Main />
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
