import React from "react";


const Bemvindo = (props) => <h2>Bem-vindo {props.nome}</h2>

function App(){
    return(
        <div>
            <Bemvindo nome= 'Matias'/>
            <h1>Olá mundo!</h1>
        </div>
    ) 
}

export default App;