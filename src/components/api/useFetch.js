import { useState, useEffect } from 'react'
import { key } from './key'
import { ObjectToQueryString } from '../typography/url'
import axios from 'axios';

export const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const queryString = ObjectToQueryString(params)

  useEffect(() => {
    setTimeout(() => {
      axios.get(`${url}${queryString}`, key).then((res) => {
        const allLeagues = res.data;
        setData(allLeagues)
        setIsLoading(false)
      }).catch((error) => {
        setIsError(true)
        setIsLoading(false)
      })

    }, 2000);
  }, [url])

  // function axiosGet() {
  //   axios.get(`${url}${queryString}`, key).then((res) => {
  //     const allLeagues = res.data;
  //     setData(allLeagues)
  //     setIsLoading(false)
  //   }).catch((error) => {
  //     setIsError(true)
  //     setIsLoading(false)
  //   })
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     axios.options(`${url}${queryString}`,  {
  //       method: 'OPTIONS',
  //       headers: {
  //         "Access-Control-Allow-Methods": "GET",
  //         'Access-Control-Allow-Origin': "*",
  //         'Access-Control-Allow-Headers': "x-auth-token, x-response-control",
  //         'Content-Length': 0,
  //         'Content-Type': 'text / plain',
  //         'X-Auth-Token': "09c745fb9573438daaba0e0d971e0a04"

  //       }
  //     }).then((res) => {
  //       axiosGet();
  //     }).catch((error) => {
  //       axiosGet();
  //     })
  //   }, 2000);
  // }, [url])

  return [{ data, setData, isLoading, setIsLoading, isError, setIsError }]
}


// function axiosGet() {
//   axios.get(`${url}${queryString}`, key).then((res) => {
//     const allLeagues = res.data;
//     setData(allLeagues)
//     setIsLoading(false)
//   }).catch((error) => {
//     setIsError(true)
//     setIsLoading(false)
//   })
// }

// useEffect(() => {
//   setTimeout(() => {
//     axios.options(`${url}${queryString}`, key).then((res) => {
//       axiosGet();
//     }).catch((error) => {
//       axiosGet();
//     })
//   }, 2000);
// }, [url])