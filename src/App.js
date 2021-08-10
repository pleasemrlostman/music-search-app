import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./routes/Main";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Route path="/">
                    <Main />
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
