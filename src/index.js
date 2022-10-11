import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import RouterSample from './RouterSample';
import Root,{loader as rootLoader, action as rootAction,} from './routes/root';
import './RouterSample.css';
import ErrorPage from './error-page';
import reportWebVitals from './reportWebVitals';
import Contact,{loader as contactLoader} from './routes/contact';
import { createBrowserRouter,
          RouterProvider,
        Route, } from 'react-router-dom';
import EditContact from './routes/edit';
        const router = createBrowserRouter([
          {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            loader: rootLoader,
            action: rootAction,
            children: [
              {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
              },
              {
                path: "contacts/:contactId/edit",
                element: <EditContact/>,
                loader: contactLoader,
              }
            ],
          },
        ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
