import React, { Component } from 'react';
import './App.css';

const logo = require('./logo.svg') as string;

export class App extends Component {
	public render(): JSX.Element {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}
