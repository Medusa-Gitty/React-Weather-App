import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = () => {
  const data = useSelector((state) => state.weather.weather);
  return (
    <VStack>
      <Box>{formatToLocalTime(data.dt)}</Box>
      <Box>{`${data.name}, ${data.country} `}</Box>
    </VStack>
  );
};

export default TimeAndLocation;
