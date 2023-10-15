import { pageLink } from "../data";

const PageLink = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLink.map((e) => (
        <li key={e.id}>
          <a href={e.href} className={childClass}>
            {" "}
            {e.text}{" "}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PageLink;
