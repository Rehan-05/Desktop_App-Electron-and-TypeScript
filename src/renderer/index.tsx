import { render } from 'react-dom';
import App from './App';

import {Provider} from 'react-redux'
import ConfigureStore from './Store';

const store = ConfigureStore();

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
