import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import OrderReview from './components/OrderReview/OrderReview';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('product.json'),
			},
			{
				path: '/orderReview',
				element: <OrderReview />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
