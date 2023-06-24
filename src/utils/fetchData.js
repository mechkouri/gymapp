import { REACT_APP_RAPID_API_KEY } from "../config";

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}