import './App.css';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import ListPanel from './ListPanel';

function App() {
    const [value, setValue] = useState();
    const [reload, setReload] = useState();

    return (
        <div className="App">
        <header className="App-header">
            <Navbar reload={setReload}></Navbar>
            <ListPanel reload={reload} setReload={setReload}></ListPanel>
        </header>
        </div>
    );
}

export default App;
