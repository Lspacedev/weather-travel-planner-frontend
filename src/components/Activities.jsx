import { GiParkBench } from "react-icons/gi";
import { FaHiking } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { PiPicnicTableBold } from "react-icons/pi";
import { PiBicycleDuotone } from "react-icons/pi";
import { GiElephant } from "react-icons/gi";
import { MdRestaurant } from "react-icons/md";
import { GiPaintBrush } from "react-icons/gi";
import { useEffect, useState } from "react";

function Activities({ theme, locationObj }) {
  const [arr, setArr] = useState([]);
  const suggestions = [
    {
      condition: "Sunny",
      activities: [
        {
          text: "Visit a park",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Hiking",
          icon: <FaHiking className="icon" />,
        },
        {
          text: "Swimming",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Picnic",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Biking",
          icon: <PiBicycleDuotone className="icon" />,
        },
        {
          text: "Zoo",
          icon: <GiElephant className="icon" />,
        },
      ],
    },
    {
      condition: "Clear weather",
      activities: [
        {
          text: "Visit a park",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Hiking",
          icon: <FaHiking className="icon" />,
        },
        {
          text: "Swimming",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Picnic",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Biking",
          icon: <PiBicycleDuotone className="icon" />,
        },
        {
          text: "Zoo",
          icon: <GiElephant className="icon" />,
        },
      ],
    },
    {
      condition: "Partly cloudy",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Cloudy",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Overcast",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Mist",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Patchy rain nearby",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Patchy rain possible",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Patchy light drizzle",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Light drizzle",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Patchy light rain",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Light rain",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Moderate rain at times",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Moderate rain",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Heavy rain at times",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
    {
      condition: "Heavy rain",
      activities: [
        {
          text: "Visit a museum",
          icon: <GiParkBench className="icon" />,
        },
        {
          text: "Visit a art gallery",
          icon: <GiPaintBrush className="icon" />,
        },
        {
          text: "Go to the cinema",
          icon: <FaPersonSwimming className="icon" />,
        },
        {
          text: "Browse a bookstore",
          icon: <PiPicnicTableBold className="icon" />,
        },
        {
          text: "Go to a restaurant",
          icon: <MdRestaurant className="icon" />,
        },
      ],
    },
  ];

  useEffect(() => {
    if (locationObj) {
      const filteredActivities = suggestions.filter((obj) =>
        obj.condition.match(locationObj.condition.text)
      );
      if (filteredActivities.length > 0) {
        setArr(filteredActivities[0].activities);
      }
    }
  }, [locationObj]);
  console.log(arr, locationObj);
  return (
    <div className={`Activities ${theme}`}>
      <h4>
        In this, <span>{locationObj.condition.text} </span>weather, here are
        some activies you can enjoy
      </h4>
      <div className="activities-div">
        {arr && arr.length > 0 ? (
          arr.map((activity, i) => (
            <div className="activity" key={i}>
              <div className="icon-div">{activity.icon}</div>
              <div className="text">{activity.text}</div>
            </div>
          ))
        ) : (
          <div>No suggestion activites</div>
        )}
      </div>
    </div>
  );
}
export default Activities;
