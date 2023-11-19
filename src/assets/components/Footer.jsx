import { FaInstagram } from "react-icons/fa";

//CREATE COMPONENT WITH NAME AND LINK TO DESIGNER IG PROFILE
const Footer = () => {
  return (
    <>
      <footer className="content animate__animated animate__fadeInUp">
        <div className="footerContent">
          <h5>DesignedBy: Fabian Leiva</h5>
          <div>
            <a
              className="instagramIcon"
              target="_blank"
              href="https://www.instagram.com/fab.leiva/"
            >
              <FaInstagram size="1.5em" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
