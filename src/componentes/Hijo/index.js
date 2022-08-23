import React from "react";

class Hijo extends React.Component {

    render(){
        return (
            <div>
                <h1>Amigo Secreto </h1>
                <h2>Buscar amigo : {this.props.nombre}</h2>
                <button onClick={()=> this.props.buscarAmigo()}>Busca Amigo Secreto</button>
               
            </div>
        )
    }

}

export default Hijo;