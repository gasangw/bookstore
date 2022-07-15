import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div className="navContainer">
      <h1 className="heading">Bookstore CMS</h1>
      <ul className="links">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
