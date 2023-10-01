const axios = require("axios");

const urlExerciseBase = "https://exercisedb.p.rapidapi.com";
const urlYoutubeBase =  "https://youtube-search-and-download.p.rapidapi.com";

const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.url || '';
    const type = event.queryStringParameters.type || '';
    const urlBase = type === '1' ? urlExerciseBase : urlYoutubeBase;
    const options = type === '1' ? exerciseOptions : youtubeOptions;
    const url = `${urlBase}${subject}`;
    const response = await axios.get(url, options);
    return {
      statusCode: 200,
      body: JSON.stringify({ body: response.data }),
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
}

