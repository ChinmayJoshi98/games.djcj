import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="title">
                <Link to='/' className='linkSec' id='title'><h1>Games.DJCJ</h1></Link>
            </div>
            <div className="links">
                <Link to='/' className='linkSec'>Home</Link>
                <Link to='/addUser' className='linkSec'>Add a User</Link>
                <Link to='/addGame' className='linkSec'>Add a Game</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;