import React, { Component } from "react";

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

    }

    login(){

       this.setState({nome: 'Matias'})

    }

    logout(){
        this.setState({nome: 'Visitante'})
    }


    render(){
        return(
            <div>
               <h2> Bem Vindo {this.state.nome}</h2> 
               <button onClick={this.login}>
                Entrar como Matias
               </button>
               <button onClick={this.logout}>
                Sair
               </button>
            </div>
        )
    }
}

export default Membro;