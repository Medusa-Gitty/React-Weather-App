import { Box, Divider, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TempAndDetails = () => {
  return (
    <VStack>
      <Box>Cloudy</Box>
      <HStack>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNWkT8w58qoIDjvK8rlmYrXF132cN5tl0fw&usqp=CAU" />
        <Box>34°C</Box>
        <VStack>
          <Flex>
            <UilTemperature />
            <span>Real Feel 32*</span>
          </Flex>
          <Flex>
            <UilTear />
            <span>Humidity: 65%</span>
          </Flex>
          <Flex>
            <UilWind />
            <span>Wind: 11km/hr</span>
          </Flex>
        </VStack>
      </HStack>
      <HStack>
        <Flex>
          <UilSun />
          <p>Rise : 06:45 AM</p>
        </Flex>
        <Flex>
          <UilSunset />
          <p>Set : 06:45 AM</p>
        </Flex>
        <Flex>
          <KeyboardArrowUpIcon />
          <p>High : 06:45 AM</p>
        </Flex>
        <Flex>
          <KeyboardArrowDownIcon />
          <p>Low : 06:45 AM</p>
        </Flex>
      </HStack>
      :
    </VStack>
  );
};

export default TempAndDetails;
