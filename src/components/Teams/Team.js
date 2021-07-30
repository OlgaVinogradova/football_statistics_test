import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFetch } from '../api/useFetch'
import { LINKS } from '../api/links'


export const Team = ({ }) => {
  const { id } = useParams()
  const { data, isLoading, hasError, errorMessage } = useFetch(`https://api.football-data.org/v2/teams/${id}`)
  const [teamData, setTeamData] = useState({})
  const history = useHistory()

  useEffect(() => {
    if (data) {
      setTeamData(data)
    }
  }, [data])
  console.log(teamData)


  return (
    <div>
      {console.log({ id })}

    </div>
  )
}
