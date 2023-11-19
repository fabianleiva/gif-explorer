import Search from "./Search";
import { TbBurger } from "react-icons/tb";
const Header = ({ setInput, setError }) => {
  return (
    <>
      <header className="animate__animated animate__fadeInDown">
        <div className="navbar">
          <div className="navbarSection1">
            <TbBurger className="burgerIcon" size="2.5em" />
          </div>
          <div className="navbarSection2">
            <h2>GIF's Explorer</h2>
            <img className="eye" src="/public/eye.webp" alt="eye" />
          </div>
          <div className="navbarSection3">
            <Search setInput={setInput} setError={setError} />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
