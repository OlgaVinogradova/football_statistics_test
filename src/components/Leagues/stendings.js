// import React from 'react';

// export const Standings = (props) => {
//   const [leagueTable, setleagueTable] = useState([])
//   const [leagueName, setleagueName] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [isError, setIsError] = useState(false)

//   useEffect(() => {
//     const st = () => {
//       axios.get(`https://api.football-data.org/v3/standings/${props.match.params.id}`, key).then((res) => {
//         const allLeagues = res.data.standings;
//         setleagueTable(allLeagues)
//         setIsLoading(false)
//       }).catch((error) => {
//         setIsError(true)
//         setIsLoading(false)
//       })
//       st(setleagueTable)
//     }
//     const nm = () => {
//       axios.get(`https://api.football-data.org/v3/competitions/${props.match.params.id}`, key).then((res) => {
//         const allLeagues = res.data;
//         setleagueTable(allLeagues)
//         setIsLoading(false)
//       }).catch((error) => {
//         setIsError(true)
//         setIsLoading(false)
//       })
//     }
//   }, [])
//   console.log(leagueTable)
//   return (
//     <Leaguehomepage
//       st={leagueTable}
//       nm={leagueName}
//     />
//   )
// }