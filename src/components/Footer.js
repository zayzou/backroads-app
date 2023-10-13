import { iconLink, pageLink } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLink.map(({ id, href, text }) => (
          <li key={id}>
            <a href={href} className="footer-link">
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
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
      </ul>
      <p className="copyright">
        copyright &copy; Zayzou travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
