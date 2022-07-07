import React from "react";
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

const Inputs = () => {
  return (
    <HStack>
      <Flex gap={2}>
        <Input variant="filled" placeholder="search for a city..." />
        <IconButton icon={<Search2Icon />} size="md" />
        <IconButton icon={<LocationOnIcon />} size="md" />
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
