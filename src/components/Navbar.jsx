import { Link, useNavigate } from "react-router-dom";
import '../css/navbar.css'

function Navbar() {
  const navigate = useNavigate()

  function logOut() {
    alert('User Logged out');
    navigate('/');
  }
  return (
    <div className="div">
        <div>
          <h1>Hire Hub</h1>
        </div>
        <ul>
            <Link to='/home/home' id='link'>Home</Link>
            <Link to='/home/jobs' id='link'>Jobs</Link>
            <Link to='/home/contact' id="link">Contact Us</Link>
        </ul>
        <div style={{justifyContent: "space-between", display: 'flex', gap: '10px'}}>
          <button id="btn1" onClick={() => navigate('home/addJobs')}>Add a Job</button>
          <button id="btn1" onClick={logOut}>Log out</button>
        </div>
    </div>
  )
}

export default Navbar