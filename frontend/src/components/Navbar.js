import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="title">
                <h1>Games.DJCJ</h1>
            </div>
            <div className="links">
                <Link to='/' className='linkSec'>Home</Link>
                <Link to='/addUser' className='linkSec'>Add a User</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;