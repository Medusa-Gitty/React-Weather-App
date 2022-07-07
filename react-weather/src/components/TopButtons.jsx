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
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <HStack>
      {cities.map((city) => (
        <Button
          key={city.id}
          colorScheme="gray"
          variant="ghost"
          onClick={() => cityQueryHandler(city.title)}
        >
          {city.title}
        </Button>
      ))}
    </HStack>
  );
};

export default TopButtons;
