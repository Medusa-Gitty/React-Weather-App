import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = () => {
  const data = useSelector((state) => state.weather.weather);
  return (
    <VStack>
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, white, white, pink)"
        bgClip="text"
      >{`${data.name}, ${data.country} `}</Heading>

      <Box fontSize="18px">{formatToLocalTime(data.dt, data.timezone)}</Box>
    </VStack>
  );
};

export default TimeAndLocation;
