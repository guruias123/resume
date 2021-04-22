import {Link} from 'react-router-dom'
import './Last.css'
function Last(){
    return(
        <div className='last'>
        <h2 style={{color:'white'}} >thank you for submitting the resume</h2>
        <h3 style={{color:'white'}} >submit another resume <Link to='/'>here</Link></h3>
        </div>
    )
}

export default Last;

