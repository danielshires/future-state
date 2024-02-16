import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page.tsx';
import FutureState from './Routes/future-state.tsx';
import Goal from './Routes/ten-percent.tsx';
import BuildProducts from './Routes/build-products.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'future-state/',
		element: <FutureState />,
	},
  {
		path: 'future-state/10-percent',
		element: <Goal/>,
	},
  {
		path: 'future-state/build-products',
		element: <BuildProducts />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
