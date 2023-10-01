export const fetchData = async (url, type) => {
  const netlifyURL = `/.netlify/functions/fetchExercise?url=${url}&type=${type}`;
  try {
    const resp = await fetch(netlifyURL);
    if (resp.status === 200) {
      const data = await resp.json();
      return data.body;
    }
  } catch (error) {
    console.log(error);
  }
};
