import React from "react";


const Equipe = (props) =>{
    return (
        <div>
            <Sobre nome={props.nome}
             idade= {props.idade}
             cargo= {props.cargo}
             />
        </div>
    )

}

const Sobre = (props) => <h2>Funcionario: {props.nome} Idade: {props.idade} Cargo: {props.cargo}</h2>

function App(){
    return(
        <div>
            <Equipe nome= 'Matias' idade= '29' cargo= 'Fullstack'/>
            <h1>Olá mundo!</h1>
        </div>
    ) 
}

export default App;