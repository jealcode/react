import React from 'react'


const image = (data) => {
    return require(`${data}`)
}

const Tarjeta = props => {
    const tarjetas = props.pelicula.map((fila, index) => {
        const foto = './img/' + fila.foto;
        return (
            <div className="col-4" key={fila.id}>
                <div className="card">
                    <img src={image(foto)} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{fila.titulo}</h5>
                        <p className="card-text">{fila.titulo}</p>
                        <p className="card-text">{fila.titulo}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-primary" type="button" onClick={() => props.modificarPelicula(fila)}>Modificar</button>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-primary" type="button" onClick={() => props.borrarPelicula(fila.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        )
    })
    return <div className="row">{tarjetas}</div>
}

class Tarjetas extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { peliculas, eliminarPelicula, modificarPelicula} = this.props;
        return (
            <Tarjeta pelicula={this.props.peliculas} borrarPelicula={eliminarPelicula} modificarPelicula={modificarPelicula}/>
        )
    }

}


export default Tarjetas;
