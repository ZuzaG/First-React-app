const Header = () => {
  return (
    <header className="header">
      <div className="mycompany">moja firma</div>
      <nav className="nav">
        <ul className="navList">
          <li className="navListItem">
            <a href=".section2">o nas</a>
          </li>
          <li className="navListItem">
            <a href=".section3">oferta</a>
          </li>
          <li className="navListItem">kontakt</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
