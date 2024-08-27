import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma', // Ao invés de gerar as classes em produção com o prefixo default de 'jss', vai gerar com prefixo 'ma' evitando o conflito de classes
})

export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
            <Switch>
                <Route exact path="/pricing" component={Pricing}/>
                <Route path="/" component={Landing}/>
            </Switch>
            </Router>
        </StylesProvider>
    </div>
}