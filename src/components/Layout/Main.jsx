import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Toaster/>
		</div>
	);
};

export default Main;
