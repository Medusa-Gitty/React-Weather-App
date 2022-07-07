import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { VStack } from "@chakra-ui/react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";

function App() {
  return (
    <VStack p={4} gap={3}>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </VStack>
  );
}

export default App;

//11:50
