import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";

const TopButtons = () => {
  const cities = [
    { id: 1, title: "Mumbai" },
    { id: 2, title: "Pune" },
    { id: 3, title: "Kolkata" },
    { id: 4, title: "Bangalore" },
    { id: 5, title: "Delhi" },
  ];
  return (
    <HStack>
      {cities.map((city) => (
        <Button key={city.id} colorScheme="gray" variant="ghost">
          {city.title}
        </Button>
      ))}
    </HStack>
  );
};

export default TopButtons;
