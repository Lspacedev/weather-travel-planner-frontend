import SearchLocation from "./SearchLocation";
import SavedLocationCard from "./SavedLocationCard";
import LocationMap from "./LocationMap";
import Activities from "./Activities";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { TiDelete } from "react-icons/ti";
import { PiUserCircleThin } from "react-icons/pi";

function Main({
  locationObj,
  changeLocation,
  changeTheme,
  theme,
  handleSaveLocation,
  lat,
  lon,
  weeklyForecast,
  suggest,
  toggleActivities,
  openModal,
  openProfileModal,
  closeModal,
  closeProfileModal,
  savedLocations,
  handleDeleteSavedLocation,
}) {
  let date = JSON.stringify(locationObj) !== "{}" ? locationObj.time : "";
  date = date && date.match(/\d{4}\-\d{1,2}\-\d{2,4}/)[0];
  let dateText = new Date(date);
  dateText = dateText.toDateString();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  console.log({ savedLocations });
  return (
    <div className={`Main ${theme}`}>
      {openModal && savedLocations && (
        <div className="Modal">
          <div className="savedLocations">
            <div className="fav-nav">
              <div className="form-close" onClick={closeModal}>
                <CgClose />
              </div>
              <div style={{ color: "white", fontSize: "20px" }}>Favourites</div>
            </div>
            {savedLocations.length > 0 ? (
              <ul>
                {savedLocations.map((location, i) => (
                  <li key={i} onClick={() => changeLocation(location.city)}>
                    <p>{location.city}</p>
                    <span
                      className="location-delete"
                      onClick={() => handleDeleteSavedLocation(location._id)}
                    >
                      <TiDelete />
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: "white" }}>No saved locations.</p>
            )}
          </div>
        </div>
      )}
      {openProfileModal && (
        <div className="Modal">
          <div className="profile">
            <div className="profile-nav">
              <div className="form-close" onClick={closeProfileModal}>
                <CgClose />
              </div>
              <div style={{ fontSize: "20px" }}>Profile</div>
            </div>
            <div className="profile-icon">
              <PiUserCircleThin className="icon" />
            </div>
            <div className="profile-heading">Name</div>

            <div className="profile-text">{name}</div>
            <br />
            <div className="profile-heading">Email</div>

            <div className="profile-text">{email}</div>
          </div>
        </div>
      )}
      <div className="main-header">
        <div className="date">
          {dateText === "Invalid Date" ? "No date data" : dateText}
        </div>
        <SearchLocation changeLocation={changeLocation} />
        <button className="suggest-btn" onClick={suggest}>
          {toggleActivities ? "Weather" : "Activities"}
        </button>
        <div className="theme-symbol-save-alert">
          {/* <button className="theme-btn" onClick={changeTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button> */}

          <button className="save-btn" onClick={handleSaveLocation}>
            Save Location
          </button>
        </div>
      </div>
      <div className="weather-information">
        <LocationMap
          theme={theme}
          locationObj={locationObj}
          lat={lat}
          lon={lon}
        />
        {toggleActivities ? (
          <Activities theme={theme} locationObj={locationObj} />
        ) : (
          <SavedLocationCard
            theme={theme}
            locationObj={locationObj}
            weeklyForecast={weeklyForecast}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
