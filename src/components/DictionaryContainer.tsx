import { FunctionComponent, useEffect, useState } from "react";
import Search from "./Search";

const DictionaryContainer: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
  }, [searchValue]);

  return (
    <div className="dictionary_container">
      <Search setSearchValue={setSearchValue} />
    </div>
  );
};

export default DictionaryContainer;
