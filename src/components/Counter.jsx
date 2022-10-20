import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from './Button2';

const Counter = () => {
    const [contador, setContador] = useState(0);
    const [fecha, setFecha] = useState(null);

    const handleAdd = () => {
    console.log('+');
    setContador(contador + 1);
    const date = new Date().toLocaleString();
    setFecha(date);
    };

    const handleSubstract = () => {
    console.log('-');
    setContador(contador - 1);
    };

    useEffect(()=>{
        console.log("cambio el contador")
        if(contador > 10){ setMensaje(true)}
    },[contador]);
        
    return (
    <div className="grid">
        <Button onClick={() => handleAdd()}> Sumar </Button>
        <span> Hice click {contador} veces </span>
        <span> y mi ultimo click fue el {fecha} </span>
        <Button onClick={() => handleSubstract()}> Restar </Button>
    </div>
    );
};

export default Counter;