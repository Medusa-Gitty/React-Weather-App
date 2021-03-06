import React, { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Divider,
  Flex,
  IconButton,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { weatherQueryActions } from "../store/weather-query-slice";

const Inputs = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [input, setInput] = useState(``);
  const { units } = useSelector((state) => state.weather);

  function searchCityHandler() {
    if (input === ``) {
      toast({
        title: `Search for a valid city`,
        status: "info",
        variant: "subtle",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
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
      toast({
        title: `Fetched your location weather `,
        status: "success",
        variant: "subtle",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  function unitToggleHandler(event) {
    if (units === event.target.name) return;
    dispatch(weatherQueryActions.unitToggle(event.target.name));
    toast({
      title: `Updated units  to : ${event.target.name}`,
      status: "info",
      variant: "subtle",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <Flex width="100%" direction={["column", "row"]} gap={2} justify="center">
      <Flex gap={1}>
        <Input
          variant="filled"
          placeholder="Search for a city"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          fontSize="xl"
          boxShadow="md"
        />
        <IconButton
          icon={<Search2Icon />}
          size="md"
          onClick={searchCityHandler}
          color="gray"
          isRound={true}
          boxShadow="md"
        />
        <IconButton
          icon={<LocationOnIcon />}
          size="md"
          onClick={searchLocationHandler}
          color="gray"
          isRound={true}
          boxShadow="md"
        />
      </Flex>
      <Flex justify="center" gap={3} color="gray">
        <Button name="metric" onClick={unitToggleHandler} boxShadow="md">
          ??C
        </Button>
        <Divider orientation="vertical" />
        <Button name="imperial" onClick={unitToggleHandler} boxShadow="md">
          ??F
        </Button>
      </Flex>
    </Flex>
  );
};

export default Inputs;
