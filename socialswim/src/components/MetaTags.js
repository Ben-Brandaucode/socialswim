import React from 'react';
import React, { Component } from 'react'

export class MetaTags extends Component {
    constructor(props) {
        super(props)
    
        this.type = {
             
        }
    }
    
    render() {
        return (
            <div>
            div className="col">
            <input type="radio"value="Happy" name ="topic"/> Happy;
            <input type= "radio" value ="angry" name="topic"/> Angry;
            <input type="radio" value="political" name="topic"/> Political;
            <input type= "radio"value={state.trending} name="topic"/> {state.trending} 
                
            </div>
        )
    }
}

export default MetaTags


// function selectType(props){
//     constuctor(props)
//     super (props)
//     this.state ={
//         type: {value}


//     }
//     render(){
//         return(
//             <div className="col">
//             <input type="radio"value="Happy" name ="topic"/> Happy;
//             <input type= "radio" value ="angry" name="topic"/> Angry;
//             <input type="radio" value="political" name="topic"/> Political;
//             <input type= "radio"value={state.trending} name="topic"/> {state.trending} 
        
//         <h1>Select your post type</h1>
//         </br>;
        
//         </div>
//         )
        
//     }
// }
// export default metaTags