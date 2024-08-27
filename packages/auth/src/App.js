import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Signup from './components/Signup'
import Signin from './components/Signin'


const generateClassName = createGenerateClassName({
    productionPrefix: 'au', // Ao invés de gerar as classes em produção com o prefixo default de 'jss', vai gerar com prefixo 'ma' evitando o conflito de classes
})

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
            <Switch>
                <Route path="/auth/signin">
                     <Signin onSignIn={onSignIn}/>
                </Route>
                <Route path="/auth/signup">
                    <Signup onSignIn={onSignIn}/>
                </Route>
            </Switch>
            </Router>
        </StylesProvider>
    </div>
}