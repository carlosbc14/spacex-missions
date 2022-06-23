import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { Box, Spinner, Flex, Text, Spacer, Tag, Icon } from '@chakra-ui/react';
import { FaCalendar } from "react-icons/fa";

import * as API from '../services/launches';

export default function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();

  useEffect(() => {
    API.getLauncheByFlightNumber(launchId)
      .then(setLaunch)
      .catch(err => console.log("Error: " + err));
  }, [launchId]);

  return (
    <Box bg="gray.100" p={4} mb={4} borderRadius="lg">
      {
        Object.keys(launch).length === 0 ? (
          <Spinner color="blue.500" size="xl" />
        ) : (
          <>
          <Flex>
            <Text fontSize="xl">
              Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
              <strong>{launch.launch_success ? "Success" : "Failure"}</strong>
            </Tag>
          </Flex>
          <Flex align="center">
            <Icon as={FaCalendar} color="gray.500" />
            <Text fontSize="sm" color="gray.500" ml={1}>
              {format(new Date(launch.launch_date_local), 'd MMMM, yyyy')}
            </Text>
          </Flex>
          </>
        )
      }
    </Box>
  );
}
