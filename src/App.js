import React, {Component} from "react";
import Feed from "./components/Feed";

class App extends Component{


    constructor(props){
        super(props);
        this.state ={
           feed:[
            {id: 1, username: 'Matias', curtidas: 10, comentarios:12},
            {id: 2, username: 'Edson', curtidas: 18, comentarios:6},
            {id: 3, username: 'Quezia', curtidas: 15, comentarios:9},
            {id: 4, username: 'Antonia', curtidas: 1, comentarios:0},

           ]

        };

        
    }

   
    render(){
        return(
            <div>
               
           
            {this.state.feed.map((item)=>{
                return(
                    <Feed id={item.id} username={item.username}
                    curtidas= {item.curtidas} comentarios={item.comentarios}
                    
                    />

                );
            })}
        
    
            </div>
            );
           
    }
}

export default App;

