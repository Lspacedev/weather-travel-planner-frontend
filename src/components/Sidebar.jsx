import { RiDashboardLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router";

function Sidebar({
  theme,
  savedLocations,
  changeLocation,
  handleDeleteSavedLocation,
  handleOpenModal,
  handleOpenProfileModal,
}) {
  const navigation = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    navigation("/");
  }
  return (
    <div className={`Sidebar ${theme}`}>
      <div className="logo">
        <div className="loader"></div>
        <h3>TravelTides</h3>
      </div>
      <div className="dashboard-saved">
        <div className="dashboard">
          <RiDashboardLine className="icon" />
          <div className="text">Dashboard</div>
        </div>

        <div className="saved" onClick={handleOpenModal}>
          <FaHistory className="icon" />
          <div className="text">Favourites</div>
        </div>
        <div className="profile-link" onClick={handleOpenProfileModal}>
          <FaHistory className="icon" />
          <div className="text">Profile</div>
        </div>
      </div>
      <div className="logout" onClick={logout}>
        <RiDashboardLine className="icon" />
        <div className="text">Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
