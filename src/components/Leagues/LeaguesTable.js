import React from 'react'
import './LeaguesTable.css'

const imgLogo = "./img/logo_liga.png"
export const LeaguesTable = ({ leaguesInfo, sortBy }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"
            onClick={() => sortBy("Competition")}
          >Competition</th>
          <th scope="col"
            onClick={() => sortBy("Area")}

          >Area</th>
          <th scope="col">Plan</th>
          <th scope="col"
            onClick={() => sortBy("Start")}
          >Start</th>
          <th scope="col"
            onClick={() => sortBy("End")}
          >End</th>
        </tr>
      </thead>
      <tbody>
        {leaguesInfo.map((item) => (
          <tr key={item.id}>
            <td scope="row">
              <img style={{ height: 25, width: 'auto' }} src={item.emblemUrl == null ? imgLogo : item.emblemUrl} alt='emblem' />
            </td>
            <td>{item.name}</td>
            <td>{item.area.name}</td>
            <td>{item.plan && (item.plan).toLowerCase()}</td>
            <td>{item.currentSeason?.startDate && new Date(item.currentSeason.startDate).toLocaleDateString()}</td>
            <td>{item.currentSeason?.endDate && new Date(item.currentSeason.endDate).toLocaleDateString()}</td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

