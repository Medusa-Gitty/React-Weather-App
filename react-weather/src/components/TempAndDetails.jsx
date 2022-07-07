import { Box, Flex, HStack, Image, VStack } from "@chakra-ui/react";
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
import { useSelector } from "react-redux";
import { iconUrlFromCode } from "../services/weatherService";

const TempAndDetails = () => {
  let data = useSelector((state) => state.weather.weather);

  console.log(data);

  return (
    <VStack border="1px solid">
      <Box>{data.details}</Box>
      <HStack>
        <Image src={iconUrlFromCode(data.icon)} />
        <Box>{`${+data.temp.toFixed()}°`}</Box>
        <VStack>
          <Flex>
            <UilTemperature />
            <span>Real Feel {`${+data.feels_like.toFixed()}°`}</span>
          </Flex>
          <Flex>
            <UilTear />
            <span>Humidity: {`${+data.humidity.toFixed()}`}%</span>
          </Flex>
          <Flex>
            <UilWind />
            <span>Wind: {`${+data.speed.toFixed()}`}km/hr</span>
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
