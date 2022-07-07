import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { iconUrlFromCode } from "../services/weatherService";

const Forecast = ({ title }) => {
  const data = useSelector((state) => {
    return {
      daily: state.weather.weather.daily,
      hourly: state.weather.weather.hourly,
    };
  });
  const arr = title === "daily" ? data.daily : data.hourly;

  return (
    <Box width="100%">
      <p>{title.toUpperCase()}</p>
      <hr />
      <HStack justifyContent={"space-between"}>
        {arr.map((item, index) => (
          <VStack key={index}>
            <span>{item.title}</span>
            <Image src={iconUrlFromCode(item.icon)} />
            <p>{`${item.temp.toFixed()}°`}</p>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default Forecast;
