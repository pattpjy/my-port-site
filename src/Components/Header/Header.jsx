export const Header = () => {
  return (
    <div className="header">
      <ul className="nav-list">
        <li>
          <a className="nav-link">Home</a>
        </li>
        <li>
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#blog">
            Blog
          </a>
        </li>
        <li>
          <a className="nav-link" href="#proj">
            Proj
          </a>
        </li>
        <li>
          <a className="nav-link" href="#hobby">
            Hobby
          </a>
        </li>
      </ul>
    </div>
  );
};
