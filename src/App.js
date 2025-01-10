import React, {Component} from "react";

class App extends Component{


    constructor(props){
        super(props);
        this.state ={
            status: true

        };

        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({status: false})
    }

    entrar(){
        this.setState({status: true})
    }


    render(){
        return(
            <div>
               
           {this.state.status ?
           <div>
           <h2>Matias Fullstack</h2>
           <button onClick={this.sair}>Sair do sistema</button>
           
            
           </div> : 
           <div>
            <h2>ola visitante</h2>
            <button onClick={this.entrar}>Entrar no sistema</button>
            </div>
        }
        
    
            </div>
            );
           
    }
}

export default App;

