import { FunctionComponent, SetStateAction } from "react";

interface DefinitionProps {
  searchValue: string;
}

const Definition: FunctionComponent<DefinitionProps> = ({ searchValue }) => {
  return (
  <section className="definition_container">
    <p>{searchValue}</p>
  </section>
)};

export default Definition;
