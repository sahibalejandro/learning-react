import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './css/style.css';
import App from './App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

/**
 * This is the router view, similar to the <router-view> of Vue.js Router.
 */
function Root() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={StorePicker} />
                <Route path="/store/:storeId" component={App} />

                { /* Catch all not matching routes, aka 404 */ }
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
