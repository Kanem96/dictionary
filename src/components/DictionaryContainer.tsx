import { FunctionComponent, useEffect, useState } from "react";
import Search from "./Search";
import Definition from "./Definition";

const DictionaryContainer: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="dictionary_container">
      <Search setSearchValue={setSearchValue} />
      <Definition searchValue={searchValue} />
    </div>
  );
};

export default DictionaryContainer;
