import PageLink from "./PageLink";
import SocialLink from "./SocialLink";


const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" childClass="footer-link" />
      <SocialLink parentClass="footer-links" childClass="footer-link" />
      {/* <ul className="footer-icons">
        {iconLink.map(({ id, href, name }) => {
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={name}></i>
              </a>
            </li>
          );
        })}
      </ul> */}
      <p className="copyright">
        copyright &copy; Zayzou travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
