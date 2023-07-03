import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Form from "./component/form/Form";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="*" element=""/>
        </Routes>
    );
}

export default App;
