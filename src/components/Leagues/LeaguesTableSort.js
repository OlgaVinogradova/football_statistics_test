import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { useState } from 'react';
import { ArrowUp } from '../svg/arrowUp';
import { ArrowDown } from '../svg/arrowDown';
import './Leagues.css';

const imgLogo = "./img/logo_liga.png"

export const LeaguesTableSort = ({ leaguesInfo, getLeaguesInfo }) => {
  const [directionSort, setDirectionSort] = useState(true);
  let { path, url } = useRouteMatch();

  const Arrow = () => {
    return (
      directionSort ? <ArrowDown /> : <ArrowUp />
    )
  };

  const sortBy = (field, key) => {
    console.log(field)
    const copyData = leaguesInfo.concat();
    console.log(copyData)
    let sortData;

    if (key) {
      if (directionSort) {
        sortData = copyData.sort(
          (a, b) => {
            if (!a[field]) {
              a[field] = { [key]: "" }
              console.log(a[field])
              console.log(a)
            }
            if (!b[field]) {
              b[field] = { [key]: "" }
            }
            return a[field][key] > b[field][key] ? 1 : -1
          });
      } else {
        sortData = copyData.sort(
          (a, b) => {
            return a[field][key] > b[field][key] ? -1 : 1
          });
      }
    } else {
      if (directionSort) {
        sortData = copyData.sort(
          (a, b) => {
            return a[field] > b[field] ? 1 : -1
          });
      } else {
        sortData = copyData.sort(
          (a, b) => {
            return a[field] > b[field] ? -1 : 1
          });
      }
    }
    getLeaguesInfo(sortData)
    setDirectionSort(!directionSort)
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"
            onClick={() => sortBy("name")}
          >
            Competition {sortBy === "name" ? <Arrow /> : null}
          </th>
          <th scope="col"
            onClick={() => sortBy("area", "name")}
          >
            Area {sortBy === "name" ? <Arrow /> : null}

          </th>
          <th scope="col">
            Plan
          </th>
          <th scope="col"
            onClick={() => sortBy("currentSeason", "startDate")}
          >
            Start {sortBy === "startDate" ? <Arrow /> : null}
          </th>
          <th scope="col"
            onClick={() => sortBy("currentSeason", "endDate")}
          >
            End {sortBy === "endDate" ? <Arrow /> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {leaguesInfo.map((item) => (

          <tr key={item.id}>

            <td>
              <img style={{ height: 25, width: 'auto' }} src={item.emblemUrl == null ? imgLogo : item.emblemUrl} alt='emblem' />
            </td>
            <td> <Link to={`/Leagues/${item.id}`}>{item.name}</Link></td>

            <td>{item.area.name}</td>
            <td>{item.plan && (item.plan).toLowerCase()}</td>
            <td>{item.currentSeason?.startDate && new Date(item.currentSeason.startDate).toLocaleDateString()}</td>
            <td>{item.currentSeason?.endDate && new Date(item.currentSeason.endDate).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table >
  );
};
