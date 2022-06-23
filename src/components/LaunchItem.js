import { Box, Flex, Text, Spacer, Tag, Icon, Button } from '@chakra-ui/react';
import { format } from 'date-fns';
import { FaCalendar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} mb={4} borderRadius="lg">
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
      <Link to={`/launch/${launch.flight_number}`}>
        <Button colorScheme="facebook" mt={4}>
          More details
        </Button>
      </Link>
    </Box>
  );
}
