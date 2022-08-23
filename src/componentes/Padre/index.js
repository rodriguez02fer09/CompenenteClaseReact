import React from "react";
import Hijo from "../Hijo"

class Padre extends React.Component{

    state = {
       nombre:"sin asignar amigo",
        listaAmigos:["LUCAS"]// objeto tipo string
    }

    buscarAmigoSecreto =()=> {
        this.setState(prevState => {
            return {
            nombre: prevState.listaAmigos
            }
        })
    }
    render(){
        return(
            <div>
                <Hijo nombre={this.state.nombre} buscarAmigo= {this.buscarAmigoSecreto}/>
            </div>
        )
    }

}

export default Padre;