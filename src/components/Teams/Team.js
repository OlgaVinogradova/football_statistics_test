import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { Loader } from '../Loader/Loader';
import { useFetch } from '../api/useFetch';
import { Schedule } from './Schedule';

export const Team = (props) => {

  const { id } = props.match.params
  const [{ data, isLoading, isError }] = useFetch(`https://api.football-data.org/v2/teams/${id}`)
  const [scheduleParams, setScheduleParams] = useState([])

  useEffect(() => {
    if (data) {
      setScheduleParams(data)
    }
  }, [data])

  return (
    <div className='content'>
      {isLoading ? <Loader /> : isError ? <span>Ошибка</span> :
        <Fragment>
          <div className='team_card'>
            <img className='card_img' src={data?.crestUrl} alt={data?.name} />
            <div className='team_card_content'>
              <h3>
                {data?.name}
              </h3>
              <div className='team_name_small'>
                {data?.venue}
              </div>
              <a
                className='team_name_small'
                href={data?.website} target="blank">
                {data?.website}
              </a>
            </div>
          </div>
          <Schedule id={id}
            scheduleParams={scheduleParams}
            setScheduleParams={setScheduleParams} />
        </Fragment>
      }
    </div>

  );
}