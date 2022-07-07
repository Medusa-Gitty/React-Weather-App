import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { VStack } from "@chakra-ui/react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import { useEffect } from "react";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  useEffect(() => {
    async function weatherData() {
      const data = await getFormattedWeatherData({ q: "asansol" });
      console.log(data);
    }
    weatherData();
  }, []);

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
//005feeb72e0838e3972590465735efbb

//City name:
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
