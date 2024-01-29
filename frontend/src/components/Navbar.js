import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Games.DJCJ</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/addUser'>Add a User</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;