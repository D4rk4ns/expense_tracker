import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="3a660ec6-d5a4-406e-8362-ccea13792881" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>
    ,
    document.getElementById(`root`)
);
