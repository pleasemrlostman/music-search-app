import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./routes/Main/Main";
import Auth from "./routes/Auth/Auth";
import Detail from "./components/Detail/Detail";
import GlobalStyles from "./components/GlobalStyles";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <div className="App">
            <GlobalStyles />
            <HashRouter>
                {isLogged ? (
                    <Route exact path="/">
                        <Main />
                    </Route>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
                {/* <Route exact path="/">
                    <Main />
                </Route> */}
                <Route exact path="/detail" component={Detail} />
            </HashRouter>
        </div>
    );
}

export default App;
