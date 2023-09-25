import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store from '@store/store'
import {BrowserRouter} from 'react-router-dom';
import {InterfaceContextAPI} from '@contexts/interfaceContext';

// fonts
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fonts/icomoon/icomoon.woff'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    
        <BrowserRouter     basename="/clinic/">
            <InterfaceContextAPI>
                <App/>
            </InterfaceContextAPI>
        </BrowserRouter>
    </Provider>
);