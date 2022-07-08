import { Flex, HStack, Image, Text } from "@chakra-ui/react";
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
    <Flex width="100%" gap={2} direction="column">
      <Text fontSize="xl">{title.toUpperCase()} FORECAST</Text>
      <hr
        style={{
          borderTop: "2px solid white",
        }}
      />
      <HStack justifyContent={"space-between"}>
        {arr.map((item, index) => (
          <Flex key={index} direction="column" align="center">
            <Text fontSize={["14px", "xl"]}>{item.title}</Text>
            <Image src={iconUrlFromCode(item.icon)} />
            <Text fontSize={["14px", "xl"]}>{`${item.temp.toFixed()}°`}</Text>
          </Flex>
        ))}
      </HStack>
    </Flex>
  );
};

export default Forecast;
