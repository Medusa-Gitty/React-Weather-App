import React, { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { weatherQueryActions } from "../store/weather-query-slice";

const Inputs = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(``);

  function searchCityHandler() {
    dispatch(weatherQueryActions.query(input));
    setInput(``);
  }

  function searchLocationHandler() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        dispatch(weatherQueryActions.geoLocation({ lat, lon }));
      });
    }
  }

  return (
    <HStack>
      <Flex gap={2}>
        <Input
          variant="filled"
          placeholder="Search for a city..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <IconButton
          icon={<Search2Icon />}
          size="md"
          onClick={searchCityHandler}
        />
        <IconButton
          icon={<LocationOnIcon />}
          size="md"
          onClick={searchLocationHandler}
        />
      </Flex>
      <Flex>
        <Button name="metric">°C</Button>
        <Divider orientation="vertical" />
        <Button name="imperial">°F</Button>
      </Flex>
    </HStack>
  );
};

export default Inputs;
