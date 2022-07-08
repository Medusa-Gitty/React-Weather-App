import "./App.css";
import { Spinner, VStack, Image } from "@chakra-ui/react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import { useEffect } from "react";
import getFormattedWeatherData from "./services/weatherService";
import { useSelector, useDispatch } from "react-redux";
import { weatherQueryActions } from "./store/weather-query-slice";
import cool from "./assets/cool4.jpg";
import hot from "./assets/hot3.jpg";

function App() {
  const dispatch = useDispatch();
  let { queries, units, weather } = useSelector((state) => state.weather);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        dispatch(weatherQueryActions.geoLocation({ lat, lon }));
      });
    }
  }, [dispatch]);
  //Fetching Weather
  useEffect(() => {
    async function weatherData() {
      const data = await getFormattedWeatherData({ ...queries, units });
      dispatch(weatherQueryActions.weatherSave(data));
    }
    weatherData();
  }, [queries, units, dispatch]);

  const FormatBackGround = () => {
    if (!weather) return cool;
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return cool;
    return hot;
  };

  return (
    <>
      <Image src={FormatBackGround()} className="image" />
      <VStack p={5} gap={3} className="texts" w={["100%", "70%"]}>
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
    </>
  );
}

export default App;
