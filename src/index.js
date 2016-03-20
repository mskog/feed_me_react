import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

injectTapEventPlugin();

render(
    <Router history={browserHistory} routes={routes} />
    , document.getElementById('app')
);
