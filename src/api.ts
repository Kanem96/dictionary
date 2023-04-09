import axios from "axios";

const dictionaryApi = axios.create({
    baseURL: "https://api.dictionaryapi.dev/api/v2"
})

export const getDefintion = async (searchValue: string) => {
    const { data } = await dictionaryApi.get(`/entries/en/${searchValue}`);

    return data[0];
}