import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <Link to="/">Todos</Link>
    <Link to="/category/ropa">Ropa</Link>
    <Link to="/category/calzado">Calzado</Link>
  </nav>
);

export default NavBar;
