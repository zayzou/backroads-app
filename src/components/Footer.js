import {iconLink, pageLink} from "../data";

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLink.map((e) =>
                    <li key={e.id}>
                        <a href={e.href} className="footer-link">{e.text}</a>
                    </li>
                )}
            </ul>
            <ul className="footer-icons">
                {iconLink.map((icon) => {
                    const {id, href, name} = icon
                    return (
                        <li key={id}>
                            <a href={href} target="_blank"  className="footer-icon" rel="noreferrer"><i className={name}></i></a>
                        </li>
                    )
                })}

            </ul>
            <p className="copyright">
                copyright &copy; Zayzou travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer