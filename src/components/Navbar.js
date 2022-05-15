import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div >
      </div> */}
      <img className="logo" src={logo} alt="logo" />
      <div className="menu">
        <Link to='/calculator' className='menuItem' >Currency calculator</Link>
        <Link to='/' className='menuItem' >Home</Link>
        <Link to='/' className='menuItem' >Know More</Link>
      </div>
      <Link to='' className='navRight'>
        <button>Bitcoin</button>
      </Link>
    </div>
  );
}

export default Navbar;