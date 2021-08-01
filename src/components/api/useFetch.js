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

  return [{ data, setData, isLoading, setIsLoading, isError, setIsError }]
};