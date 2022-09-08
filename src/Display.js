import React from 'react'
import {Component} from 'react'
class Display extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.name} </h2>

            </div>
        )

    }
}
export default Display;