import React from 'react';
import {Cat} from "./Cat";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Main} from "./Main";


export function App() {
    return (
        <div>
            <HashRouter basename={process.env.PUBLIC_URL}>
                {/*className={s.app}*/}
                <div >
                    <Switch>
                        <Route path='/' component={Main}/>
                        <Route path='/cat' component={Cat}/>
                        <Cat/>
                    </Switch>
                </div>
            </HashRouter>
        </div>
    )
}