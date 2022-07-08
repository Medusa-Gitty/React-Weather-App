import { Button, HStack, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { weatherQueryActions } from "../store/weather-query-slice";

const TopButtons = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const cities = [
    { id: 1, title: "Mumbai" },
    { id: 2, title: "Pune" },
    { id: 3, title: "Kolkata" },
    { id: 4, title: "Bangalore" },
    { id: 5, title: "Delhi" },
  ];

  const cityQueryHandler = (city) => {
    dispatch(weatherQueryActions.query(city));
    toast({
      title: `Fetched weather for : ${city}`,
      status: "success",
      variant: "subtle",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <HStack width="100%" justify="center" gap={2}>
      {cities.map((city) => (
        <Button
          key={city.id}
          color="white"
          fontSize="xl"
          variant="link"
          onClick={() => cityQueryHandler(city.title)}
        >
          {city.title}
        </Button>
      ))}
    </HStack>
  );
};

export default TopButtons;
