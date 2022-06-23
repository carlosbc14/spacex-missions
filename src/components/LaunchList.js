import { useState, useEffect } from 'react';
import { Spinner, SimpleGrid } from '@chakra-ui/react';

import * as API from '../services/launches';
import LaunchItem from './LaunchItem';

export default function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches()
      .then(setLaunches)
      .catch(err => console.log("Error: " + err));
  }, []);

  return (
    <>
    {
      launches.length === 0 ? (
        <Spinner color="blue.500" size="xl" />
      ) : (
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          spacing={4}
        >
          {
            launches.map((launch, index) => (
              <LaunchItem key={index} {...launch} />
            ))
          }
        </SimpleGrid>
      )
    }
    </>
  );
}
