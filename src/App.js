import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
const url = 'http://localhost:8500/signup'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      resume: ''


    }
  }
  handleChange = (event) => {

    const name = event.target.value;
    this.setState({ firstname: name })

    console.log(">>>>", event.target.value)
  }
  handleChange1 = (event) => {

    const city = event.target.value;
    this.setState({ lastname: city })

    console.log(">>>>", event.target.value)
  }
  handleChange2 = (event) => {

    const files = event.target.files;

    console.log(">>>>", event.target.files)
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      console.log("file data", event.target.result)
      const data = event.target.result
      this.setState({ resume: data })

    }

  }
  handleSubmit = () => {
    console.log(">>>>>>>>>", this.state)
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(this.props.history.push('/signup'))



  }

  render() {
    return (
      <>
        <form className='content'>
          <h2 style={{color:'white'}}>upload your resume</h2>
         
          <div className='firstname'>
           <div><label>First Name</label></div>
            <input type="text" placeholder="first name" onChange={this.handleChange} />
          </div>
          <div>
            <div><label>Last Name</label></div>
            <input type='text' placeholder='last name' onChange={this.handleChange1} />
          </div>
          <div>
            <div><label>upload your resume</label></div>
            <input type='file' onChange={this.handleChange2} />
          </div>
          <br></br>
          <div>
            <Link to='/submit'> <button className='btn btn-success' onClick={this.handleSubmit}>Submit</button> </Link>
          </div>
        </form>
      </>
    )
  }
}

export default App;