import React, { Component } from 'react'
import metaTags from './MetaTags'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            post:''
             
        }
    }
    postwritten = (event) =>{
        this.setState({
            post:event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <metaTags/>
                    <label>Enter your Thought here</label>
                    <input type="text" value ={this.state.post} onChange={this.postwritten} />
                </div>
            </form>
        )
    }
}

export default Form
