import React from 'react';
import {Link} from "react-router-dom"
const Display = (props) => {
    const renderTable = ({resumedata}) => {
        if(resumedata){
            return resumedata.map((item) => {
                return(
                    <tr>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td><Link to={item.resume}><button className='btn btn-primary'>Download</button></Link> </td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Resumes</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Resume </th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default Display;