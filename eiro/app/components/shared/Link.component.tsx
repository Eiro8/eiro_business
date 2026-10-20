import Link from "next/link";
import { ChildrenProp } from "@/app/models/prop.model";

interface LinkInterface extends ChildrenProp {
  link: string
}

const LinkComponent = ({children,link} : LinkInterface) => {
  return (
      <Link
        href={link}
        aria-label="Visualizar a página sobre nós"
        className="
        text-white font-semibold p-2 border-white border-2 rounded-sm bg-transparent hover:bg-white hover:text-black duration-300 transition-colors
        "
      >
        {children}
      </Link>
  );
};
export default LinkComponent
