import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/app/store'
import { Provider } from 'react-redux'
import { worker } from './mock/worker';


// Initialize the msw worker, wait for the service worker registration to resolve, then mount
worker
  .start({ quiet: true, onUnhandledRequest: "bypass" })
  .then(() => {
    const rootNode = ReactDOM.createRoot(
      document.getElementById("root")
    );

    rootNode.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );
  })
  .catch();
