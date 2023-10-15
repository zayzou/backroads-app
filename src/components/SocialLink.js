import { iconLink } from "../data";
const SocialLink = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {iconLink.map((e) => {
        const { id, href, name } = e;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className={childClass}
              rel="noreferrer"
            >
              <i className={name}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
