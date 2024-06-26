export async function call({ location, method = "GET"}) {
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${import.meta.env.VITE_API_KEY}`
    const options = {
      method,
    }

    console.log(url);
    return fetch(url, options)
      .then(async response => {
        if (!response.ok || response.error) {
          return response.json().then(error => { throw error })
        }
        return response.json()
      })
      .catch(error => { 
        throw error
       })
  }