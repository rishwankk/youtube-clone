import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your store and Provider
import { Provider } from 'react-redux';
import store from './utils/appstore';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchContainer from './components/SearchContainer';

// Define your routes here
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Move <Body /> inside <App />
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "search",
        element: <SearchContainer />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
