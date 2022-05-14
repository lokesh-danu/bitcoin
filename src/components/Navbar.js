import {Link} from 'react-router-dom';
const Navbar = () => {
  return ( 
    <div className="navbar">
      <Link to='/calculator'  >currency calculator</Link>
      <Link to='/'  >Home</Link>
      <Link to='/'  >Know More</Link>
    </div>
   );
}
 
export default Navbar;