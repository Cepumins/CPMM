import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import React from 'react';
import LiquidityPool from './components/LiquidityPool';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className=''>
        <header className="bg-gray-800 text-white w-full">
          <div className="max-w-screen-2xl w-10/12 mx-auto flex justify-between items-center p-4" style={{ marginLeft: 100, marginRight: 'auto' }}>
            <div className="flex items-center space-x-4">
              <a className="font-bold text-lg">LPMB</a>
              <FontAwesomeIcon icon={faCoffee} className="h-8 w-8" />
            </div>
            <nav className="flex space-x-4 font-bold min-w-min">
              <a href="/" className="text-lg hover:text-gray-300 px-4 pl-6">Home</a>
              <a href="/about" className="text-lg hover:text-gray-300 px-4">About</a>
              <a href="/settings" className="text-lg hover:text-gray-300 px-4">Settings</a>
            </nav>
          </div>
        </header>
        <main className='h-7/8' style={{ flex: 1, overflow: 'auto' }}>
          <LiquidityPool />
          <div>
            we modify here
          </div>
        </main>

        <footer className='inset-x-0 bottom-5' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          made possible by caffeine 
          <FontAwesomeIcon icon={faCoffee} className='ml-1' />
        </footer>
      </div>

    </div>
  );
}

export default App;
