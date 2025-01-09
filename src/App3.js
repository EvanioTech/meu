import React, {Component} from "react";

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre 
                nome={this.props.nome}
                idade={this.props.idade}
                cargo={this.props.cargo}/>
                
                <hr/>

            </div>
        )
       
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Nome: {this.props.nome}
                   
                     </h2>
                     <h3>Cargo: {this.props.cargo}</h3>
                     <h3>idade: {this.props.idade}</h3>
            </div>
        )
       
    }
}



function App() {
    return(
        <div>
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome= 'Matias'cargo='Programador' idade= '29'/>
            <Equipe nome= 'Edson'cargo='Programador' idade= '33'/>
        </div>
    )
}


export default App;