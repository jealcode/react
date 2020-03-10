import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {pelicula} = this.props;
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="form-group col-4">
                            <label htmlFor="titulo">{pelicula.titulo}</label>
                            <input type="text"
                                name="titulo"
                                id="titulo"
                                className="form-control"
                                value={pelicula.titulo}
                            />
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="director">{pelicula.director}</label>
                            <input type="text"
                                name="director"
                                id="director"
                                className="form-control"
                                value={pelicula.director}
                            />
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="genero">{pelicula.genero}</label>
                            <input type="text"
                                name="genero"
                                id="genero"
                                className="form-control"
                                value={pelicula.genero}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="button" >Modificar</button>
                    <button className="btn btn-warning" type="button" style={{ marginLeft: 20 + 'px' }}>Volver</button>
                </form>
            </div >
        )
    }
}
export default Form;

