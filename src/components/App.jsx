import React from 'react';
import {Cat} from "./Cat";
import {BrowserRouter, Route, Switch} from "react-router-dom";


export function App() {
    return (
        <BrowserRouter>
            {/*className={s.app}*/}
            <div >
                <Switch>
                    {/*<Route path='/main' component={Cat}/>*/}
                    <Route path='/cat' component={Cat}/>
                    <Cat/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}