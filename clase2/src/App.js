import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tarjetas from './tarjeta'
import Form from './form'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objPeliculas: [{
        id: 1,
        titulo: 'El club',
        director: 'Nicalor Loreti',
        foto: 'malditos.jpg',
        genero: 'drama'
      },
      {
        id: 2,
        titulo: "ferdinand",
        director: "Nicalor dos",
        foto: 'ferdinand.jpg',
        genero: 'drama'
      },
      {
        id: 3,
        titulo: "El tres",
        director: "Nicalor tres",
        foto: 'malditos.jpg',
        genero: 'drama'
      }
      ],
      editarPelicula: true,
      peliculaSelecionda: {}
    }
  }

  eliminarPelicula = id => {
    const { objPeliculas } = this.state;
    this.setState({
      objPeliculas: objPeliculas.filter((pelicula, i) => {
        return pelicula.id !== id
      })
    })
  }

  modificarPelicula = pelicula => {
    console.log(pelicula)
    this.setState({
      peliculaSelecionda: pelicula,
      editarPelicula: true
    })
  }




  render() {
    if (this.state.editarPelicula) {
      const isLoggedIn = this.state.editarPelicula;

      return (
        <div className="container">
          {isLoggedIn ? (
            <Tarjetas peliculas={this.state.objPeliculas} eliminarPelicula={this.eliminarPelicula}
              modificarPelicula={this.modificarPelicula} />)
            : (
              <Form pelicula={this.state.peliculaSelecionda} />
            )}
        </div>
      )
    }
  }
}

export default App;
