import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
const LaunchItem = ({ match }) => {
  const flight_number = parseInt(match.params.flight_number);
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number }
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return console.error(error);

  const {
    mission_name,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch;
  return (
    <div>
      <h1 className='display-4 my-3'>
        <span className='text-dark'>Mission:</span>
        {mission_name}
      </h1>
      <h4 className='mb-3'>Launch details:</h4>
      <ul className='list-group'>
        <li className='list-group-item'>Flight Number : {flight_number}</li>
        <li className='list-group-item'>Launch year : {launch_year}</li>
        <li className='list-group-item'>
          Launch successful :{' '}
          <span
            className={classNames({
              'text-success': launch_success,
              'text-danger': !launch_success
            })}
          >
            {launch_success ? 'yes' : 'no'}
          </span>
        </li>
      </ul>
      <h4 className='my-3'>Rocket details</h4>
      <ul className='list-group'>
        <li className='list-group-item'>Rocket id : {rocket_id}</li>
        <li className='list-group-item'>Rocket name : {rocket_name}</li>
        <li className='list-group-item'>Rocket type : {rocket_type}</li>
      </ul>
      <hr />
      <Link to='/' className='btn btn-secondary'>
        Back
      </Link>
    </div>
  );
};

export default LaunchItem;
