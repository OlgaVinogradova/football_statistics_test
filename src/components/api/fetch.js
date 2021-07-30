
import axios from 'axios';

export const fetchFootballAPI = async (apilink, logData = '') => {
  try {
    const res1 = await axios.get(apilink)
    const res2 = await res1.data
    if (logData !== '' && logData !== 'logresult') console.log(logData)
    if (logData === 'logresult') await console.log(res2)
    return res2
  } catch (err) {
    console.error(err)
  }
}




  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function getUser() {
  //   try {
  //     const response = await axios.get('/user?ID=12345');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     try {
  //       const response = await fetch(`${url}${queryString}`, key)
  //       const result = await response.json()
  //       if (response.ok) {
  //         setData(result)
  //       } else {
  //         setIsError(true)
  //       }
  //     } catch (error) {
  //       setIsError(true)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [url])

  // useEffect(() => {
  // const fetchData = () => {
  //   axios.get(apiUrl, key).then((res) => {
  //     const allData = res;
  //     setData(allData)
  //     setIsLoading(false)
  //   }).catch((error) => {
  //     setIsError(true)
  //     setIsLoading(false)
  //   })
  // }
  // fetchData()
  // }, [url])

// export function useFetch(url, params = {}) {
//   const [data, setData] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [isError, setIsError] = useState(false)
//   const queryString = ObjectToQueryString(params)

//   useEffect(() => {
//     const fetchData = () => {
//       axios.get(`${url}${queryString}`, key).then((res) => {
//         const allData = res.data;
//         setData(allData)
//         setIsLoading(false)
//       }).catch((error) => {
//         setIsError(true)
//         setIsLoading(false)
//       })
//     }
//     fetchData()
//   }, [url])
//   return ({ data, isLoading, isError })
// }
