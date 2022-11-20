import { maleAvatar } from "../../assets/index";
import "./nav.css";
import "../../Utils/styles.css";

const NavBar = () => {
  return (
    <nav className="navigation-bar flex_r">
      <img src={maleAvatar} alt="error" className="avatar" />
      <p>Home</p>
    </nav>
  );
};

export { NavBar };
