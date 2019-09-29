import React from 'react';
import Launch from './Launch';
import gql from 'graphql-tag';
import MissionKey from './MissionKey';
import { useQuery } from '@apollo/react-hooks';

const LAUNCHES_QUERY = gql`
  query LAUNCHES_QUERY {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) return console.error(error);

  return (
    <React.Fragment>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      {data.launches.map(launch => (
        <Launch key={launch.flight_number} launch={launch} />
      ))}
    </React.Fragment>
  );
};

export default Launches;
