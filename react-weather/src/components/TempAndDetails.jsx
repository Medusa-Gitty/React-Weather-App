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
import { formatToLocalTime } from "../services/weatherService";

const TempAndDetails = () => {
  let data = useSelector((state) => state.weather.weather);

  return (
    <VStack gap={2}>
      <Box fontSize="2xl">{data.details}</Box>
      <HStack
        gap={10}
        border={"2px solid white"}
        p="0px 20px"
        borderRadius={20}
      >
        <Flex align="center">
          <Image src={iconUrlFromCode(data.icon)} h="150px" />
          <Box fontSize="2xl">{`${+data.temp.toFixed()}°`}</Box>
        </Flex>

        <VStack fontSize={[13, "xl"]}>
          <Flex align="center" gap={2}>
            <UilTemperature />
            <span>Real Feel : {`${+data.feels_like.toFixed()}°`}</span>
          </Flex>
          <Flex align="center" gap={2}>
            <UilTear />
            <span>Humidity : {`${+data.humidity.toFixed()}`}%</span>
          </Flex>
          <Flex align="center" gap={2}>
            <UilWind />
            <span>Wind : {`${+data.speed.toFixed()}`}km/hr</span>
          </Flex>
        </VStack>
      </HStack>
      <HStack gap={[0, 5]} fontSize={[10, "xl"]}>
        <Flex align="center">
          <UilSun />
          <p>
            Rise : {formatToLocalTime(data.sunrise, data.timezone, "hh:mm a")}
          </p>
        </Flex>
        <Flex align="center">
          <UilSunset />
          <p>
            Set : {formatToLocalTime(data.sunset, data.timezone, "hh:mm a")}
          </p>
        </Flex>
        <Flex align="center">
          <KeyboardArrowUpIcon />
          <p>High : {`${+data.temp_max.toFixed()}°`}</p>
        </Flex>
        <Flex align="center">
          <KeyboardArrowDownIcon />
          <p>Low : {`${+data.temp_min.toFixed()}°`}</p>
        </Flex>
      </HStack>
    </VStack>
  );
};

export default TempAndDetails;
