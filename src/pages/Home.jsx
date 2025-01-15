import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import useLocalStorage from "../components/useLocalStorage";

function Home() {
  const [locationName, setLocationName] = useLocalStorage("locName", "");
  const [locationObj, setLocationObj] = useLocalStorage("locObject", {});
  const [lon, setLon] = useLocalStorage("lon", 51.505);
  const [lat, setLat] = useLocalStorage("lat", -0.09);
  const [weeklyForecast, setWeeklyForecast] = useLocalStorage("weekly", []);
  const [loading, setLoading] = useState(false);

  const [savedLocations, setSavedLocations] = useState([]);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [toggleActivities, setToggleActivities] = useLocalStorage(
    "toggle",
    false
  );
  const [openModal, setOpenModal] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);

  const apiKey = process.env.API_KEY;
  const apiUrl = process.env.API_URL;
  const token = localStorage.getItem("token");
  useEffect(() => {
    getFavourites();
  }, []);
  useEffect(() => {
    function success(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let name = lat.toString() + "," + long.toString();

      setLocationName(name);
    }
    function error(error) {
      console.log(error);
    }

    if (locationName === "") {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);
  useEffect(() => {
    const storedCity = locationObj.city;
    if (locationName !== "" && locationName !== storedCity) {
      fetch(
        `${apiUrl}/v1/forecast.json?key=${apiKey}&q=${locationName}&days=10&aqi=no&alerts=no`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.forecast.forecastday);
          let location = res.location;
          let current = res.current;
          let forecast = res.forecast.forecastday[0];

          const obj = {
            country: location.country,
            region: location.region,
            city: location.name,
            time: location.localtime,
            temp_c: current.temp_c,
            temp_f: current.temp_f,
            humidity: current.humidity,
            visibility: current.vis_km,
            condition: {
              text: current.condition.text,
              icon: current.condition.icon,
            },
            wind_speed: current.wind_kph,
            chance_of_rain: forecast.day.daily_chance_of_rain,
            sunrise: forecast.astro.sunrise,
            sunset: forecast.astro.sunset,
            uv: forecast.day.uv,
            day: {
              avghumidity: forecast.day.avghumidity,
              avgtemp_c: forecast.day.avgtemp_c,
              avgtemp_f: forecast.day.avgtemp_f,
              avgvis_km: forecast.day.avgvis_km,
              avgvis_miles: forecast.day.avgvis_miles,
            },
            hour: {
              twelve_am: forecast.hour[0],
              six_am: forecast.hour[0],
              six_pm: forecast.hour[0],
              twelve_pm: forecast.hour[0],
            },
          };

          setLocationObj(obj);
          setLat(res.location.lat);
          setLon(res.location.lon);
          setWeeklyForecast(res.forecast.forecastday);
        })
        .catch((err) => {
          console.log(err);
          setErr(err);
        });
    }
  }, [locationName]);

  async function getFavourites() {
    try {
      setLoading(true);

      const res = await fetch(`${process.env.PROD_URL}/api/favorites`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (res.ok) {
        setSavedLocations(data);
      } else {
        alert("An error occured");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  function changeLocation(name) {
    setLocationName(name);
  }

  function changeTheme() {
    let toggle = theme === "light" ? "dark" : "light";
    setTheme(toggle);
  }

  async function handleSaveLocation() {
    const findLocation = savedLocations.filter(
      (location) => location.city === locationName
    );
    if (locationName === "") {
      alert("No location detected");
      return;
    }
    if (findLocation.length !== 0) {
      alert("Location already saved");

      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${process.env.PROD_URL}/api/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          city: locationName,
          weatherData: locationObj,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Success");
        setSavedLocations(data);
      } else {
        alert("An error occured");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }
  async function handleDeleteSavedLocation(id) {
    try {
      setLoading(true);

      const res = await fetch(`${process.env.PROD_URL}/api/favorites/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (res.ok) {
        alert("Success");
        setSavedLocations(data);
      } else {
        alert("An error occured");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }
  function suggest() {
    if (JSON.stringify(locationObj) === "{}") {
      alert("No location detected");
      return;
    }
    setToggleActivities(!toggleActivities);
  }
  console.log({ savedLocations });
  return (
    <div className="Home">
      <Sidebar
        theme={theme}
        savedLocations={savedLocations}
        changeLocation={changeLocation}
        handleDeleteSavedLocation={handleDeleteSavedLocation}
        handleOpenModal={() => setOpenModal(true)}
        handleOpenProfileModal={() => setOpenProfileModal(true)}
      />
      <Main
        locationObj={locationObj || {}}
        changeLocation={changeLocation}
        changeTheme={changeTheme}
        theme={theme}
        handleSaveLocation={handleSaveLocation}
        lat={lat}
        lon={lon}
        weeklyForecast={weeklyForecast}
        suggest={suggest}
        toggleActivities={toggleActivities}
        openModal={openModal}
        openProfileModal={openProfileModal}
        closeModal={() => setOpenModal(false)}
        closeProfileModal={() => setOpenProfileModal(false)}
        savedLocations={savedLocations}
        handleDeleteSavedLocation={handleDeleteSavedLocation}
      />
    </div>
  );
}

export default Home;
