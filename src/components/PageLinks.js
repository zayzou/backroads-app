import { pageLink } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLink.map((link) => (
        <PageLink key={link.id} link={link} childClass={childClass} />
      ))}
    </ul>
  );
};

export default PageLinks;
