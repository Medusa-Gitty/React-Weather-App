import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";

const Forecast = ({ title }) => {
  return (
    <Box width="100%">
      <p>{title.toUpperCase()}</p>
      <hr />
      <HStack justifyContent={"space-between"}>
        <VStack>
          <span>02:00 PM</span>
          <Image src="http://openweathermap.org/img/wn/02d@2x.png" />
          <p>22*</p>
        </VStack>
        <VStack>
          <span>02:00 PM</span>
          <Image src="http://openweathermap.org/img/wn/02d@2x.png" />
          <p>22*</p>
        </VStack>
        <VStack>
          <span>02:00 PM</span>
          <Image src="http://openweathermap.org/img/wn/02d@2x.png" />
          <p>22*</p>
        </VStack>
        <VStack>
          <span>02:00 PM</span>
          <Image src="http://openweathermap.org/img/wn/02d@2x.png" />
          <p>22*</p>
        </VStack>
        <VStack>
          <span>02:00 PM</span>
          <Image src="http://openweathermap.org/img/wn/02d@2x.png" />
          <p>22*</p>
        </VStack>
        <VStack>
          <span>02:00 PM</span>
          <Image src="http://openweathermap.org/img/wn/02d@2x.png" />
          <p>22*</p>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Forecast;
