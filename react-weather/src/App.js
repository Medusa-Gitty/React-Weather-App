import "./App.css";
import { Spinner, VStack } from "@chakra-ui/react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import { useEffect } from "react";
import getFormattedWeatherData from "./services/weatherService";
import { useSelector, useDispatch } from "react-redux";
import { weatherQueryActions } from "./store/weather-query-slice";

function App() {
  const dispatch = useDispatch();
  let { q, units, weather } = useSelector((state) => state.weather);
  console.log(q, units, weather);

  //Fetching Weather
  useEffect(() => {
    async function weatherData() {
      const data = await getFormattedWeatherData({ q, units });
      dispatch(weatherQueryActions.save(data));
    }
    weatherData();
  }, [q, units, dispatch]);

  return (
    <VStack p={4} gap={3}>
      <TopButtons />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation />
          <TempAndDetails />
          <Forecast title="hourly" />
          <Forecast title="daily" />
        </>
      )}
      {!weather && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </VStack>
  );
}

export default App;

//11:50
//005feeb72e0838e3972590465735efbb

//City name:
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
