import React from 'react';
import ReactDOM from 'react-dom'



const elemento = React.createElement('h2', {}, 'hola prueba');


const elemento2 = <h1>Hola soy react</h1>

const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
  
ReactDOM.render(elemento, document.querySelector("#second"));
ReactDOM.render(element, document.querySelector("#main"));

/*
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  */

  