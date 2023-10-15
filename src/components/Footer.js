import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link" />
      <SocialLink parentClass="footer-links" childClass="footer-link" />
      <p className="copyright">
        copyright &copy; Zayzou travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
