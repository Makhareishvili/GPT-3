import "./navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = (): JSX.Element => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3 ">What is GPT3</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">CaseStudies</a>
      </p>
      <p>
        <a href="#home">Library</a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <CloseIcon
              sx={{ color: "white" }}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MenuIcon
              sx={{ color: "white" }}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
