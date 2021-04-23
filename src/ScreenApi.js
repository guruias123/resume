import React,{Component} from 'react';

import Display from './Display';

const url = "http://localhost:8500/signup1"

class ScreenApi extends Component{
    constructor(props){
        super(props)

        this.state={
            booking:''
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        //setting data in state
        .then((data)=> this.setState({booking:data}))
        console.log(this.state.booking)
    }
   

    render(){
        return(
            <div>
                <Display resumedata={this.state.booking} />
            </div>
        )
    }

  
}


export default ScreenApi;