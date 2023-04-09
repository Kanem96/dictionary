import { FunctionComponent, useEffect, useState } from "react";
import { getDefintion } from "../api";
interface DefinitionProps {
  searchValue: string;
}

interface DefinitionShape {
  word: string;
  phonetic: string;
  origin: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }[];
}

const Definition: FunctionComponent<DefinitionProps> = ({ searchValue }) => {
  const [definition, setDefinition] = useState<DefinitionShape | null>(null);

  useEffect(() => {
    if (searchValue) {
      const fetchDefinition = async () => {
        const definitionInfo = await getDefintion(searchValue);
        setDefinition(definitionInfo);
      };
      fetchDefinition();
    }
  }, [searchValue]);

  return (
    <section className="definition_container">
      <p>{definition?.word}</p>
      <p>{definition?.phonetic}</p>
      <p>{definition?.meanings[0].definitions[0].definition}</p>
    </section>
  );
};

export default Definition;
