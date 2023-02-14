import React from 'react';
import Board from './components/board/Board';
import Header from './components/header/Header';

export default function App(){
    return (
        <React.Fragment>
            <Header />
            <Board />
        </React.Fragment>
    )
}