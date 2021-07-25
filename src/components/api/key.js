const apiKey = process.env.REACT_APP_API_KEY

export const key = {
  method: 'GET',
  headers: {
    'X-Auth-Token': apiKey
  }
}