// import React from 'react'
// import { useState, useEffect } from 'react'
// import { key } from '../api/key'
// import axios from 'axios';

// export const TableLeagues = ({FreeLeagues, id}) => {
//   const [leagueTable, setleagueTable] = useState([])
//   const [isError, setIsError] = useState(false)

//   useEffect(() => {
//     axios.get(`https://api.football-data.org/v3/standings/${props.match.params.id}`, key).then((res) => {
//       const allLeagues = res.data.standings;
//       setleagueTable(allLeagues)
//     }).catch((error) => {
//       setIsError(true)
//     }).then(() => {
//     });


//   }, [])


//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th scope='col'>#</th>
//             <th scope='col'>Team</th>
//             <th scope='col'>PL</th>
//             <th scope='col'>W</th>
//             <th scope='col'>D</th>
//             <th scope='col'>L</th>
//             <th scope='col' >
//               +/-
//             </th>
//             <th scope='col'>GD</th>
//             <th scope='col'>Pts</th>
//             <th scope='col'>
//               Form
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {leagueTable.map((team) => (
//             <tr key={team.team_id}>
//               <td>{team.position}</td>
//               <td>{team.team_name}</td>
//               <td>{team.overall_gp}</td>
//               <td>{team.overall_w}</td>
//               <td>{team.overall_d}</td>
//               <td>{team.overall_l}</td>
//               <td >{`${team.overall_gs}-${team.overall_ga}`}</td>
//               <td>{team.gd}</td>
//               <td>{team.points}</td>
//               <td>
//                 {team.recent_form === null
//                   ? team.recent_form
//                   : team.recent_form.split('').join(' ')}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }