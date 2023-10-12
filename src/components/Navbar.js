import logo from "../images/logo.svg"
import {pageLink, iconLink} from "../data";

const Navbar = () => {

    return (<nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads"/>
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <ul className="nav-links" id="nav-links">
                {pageLink.map((e) => <li key={e.id}>
                    <a href={e.href} className="nav-link"> {e.text} </a>
                </li>)}

            </ul>

            <ul className="nav-icons">
                {iconLink.map((e) => {
                    const {id, href, name} = e
                    return (<li key={id}>
                            <a href={href} target="_blank" className="nav-icon" rel="noreferrer"><i className={name}></i></a>
                        </li>)
                })}

            </ul>
        </div>
    </nav>);
}
export default Navbar