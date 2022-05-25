import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './app/store';
import RedirectSreen from './pages/RedirectScreen/RedirectSreen';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <CookiesProvider>
      <Provider store={store}>
        <Routes>
          <Route path="/"
            element={<App />}
          >
          </Route>
          <Route path="/:shortPath"
            element={<RedirectSreen />}
          ></Route>
        </Routes>
      </Provider>
    </CookiesProvider>
  </Router >
);
reportWebVitals();
