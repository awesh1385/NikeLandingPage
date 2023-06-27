
import Logo from "../assets/images/brand_logo.png";
export const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="elements">
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="login-btn">
            <button>Login</button>
        </div>
      </nav>
    </header>
  );
};
