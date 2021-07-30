import React from 'react'
import { useState } from 'react';
import { ArrowUp } from './../svg/arrowUp';
import { ArrowDown } from './../svg/arrowDown';
import './Leagues.css';

const imgLogo = "./img/logo_liga.png"

export const LeaguesTable = ({ leaguesInfo, sortBy, directionSort }) => {
  const [fieldData, setFieldData] = useState('');
  const [keyData, setKeyData] = useState('');

  const Arrow = () => {
    return (
      directionSort ? <ArrowDown /> : <ArrowUp />
    )
  }

  const dataSortData = (field, key) => {
    sortBy(field, key)
    setKeyData(key)
    setFieldData(field)
  }


  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"
            onClick={() => dataSortData("name")}
          >
            Competition {fieldData === "name" ? <Arrow /> : null}
          </th>
          <th scope="col"
            onClick={() => dataSortData("area", "name")}
          >
            Area {keyData === "name" ? <Arrow /> : null}

          </th>
          <th scope="col">
            Plan
          </th>
          <th scope="col"
            onClick={() => dataSortData("currentSeason", "startDate")}
          >
            Start {keyData === "startDate" ? <Arrow /> : null}
          </th>
          <th scope="col"
            onClick={() => dataSortData("currentSeason", "endDate")}
          >
            End {keyData === "endDate" ? <Arrow /> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {leaguesInfo.map((item) => (
          <tr key={item.id}>
            <td>
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

