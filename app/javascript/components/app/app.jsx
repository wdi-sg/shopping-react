import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../home/home'
import About from '../about/about'
import Product from '../product/product'


class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                </Switch>
            </div>
        );
    }
}

export default App;
