import React, { useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "routes/Main/Main";
import Auth from "routes/Auth/Auth";
import Detail from "components/Detail/Detail";
import GlobalStyles from "components/GlobalStyles";
import { authService } from "fbase";
function App() {
    const [init, setInit] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLogged(true);
                setUserObj(user);
            } else {
                setIsLogged(false);
            }
            setInit(true);
        });
    });

    return (
        <div className="App">
            <GlobalStyles />
            {init ? (
                <HashRouter>
                    {isLogged ? (
                        <Route exact path="/">
                            <Main userObj={userObj} />
                        </Route>
                    ) : (
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    )}
                    {/* <Route exact path="/">
                    <Main />
                </Route> */}
                    <Route exact path="/detail/:id" component={Detail} />
                </HashRouter>
            ) : (
                "initializing"
            )}
        </div>
    );
}

export default App;
