import { ReactNode } from "react";
import "./Description.css";

interface DescriptionProps {
  children: ReactNode;
}

function Description({ children }: DescriptionProps) {
  return <div className="description">{children}</div>;
}

export default Description;
