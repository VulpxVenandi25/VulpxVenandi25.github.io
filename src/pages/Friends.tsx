import { useState } from "react";
import FriendData from "../assets/json/friends.json";
import { FriendCard } from "../components/Card";
import "../assets/styles/friends.css";

function Friend() {
  const [Friends] = useState(FriendData.Amigos || []);
  return (
    <div>
      <h1 className="text-h1">Links de otros creadores</h1>
      <div className="friends">
        {Friends.map((data, index) => (
          <FriendCard
            key={index}
            image={data.image}
            name={data.name}
            links={Array.isArray(data.links) ? data.links : []}
          />
        ))}
      </div>
    </div>
  );
}

export default Friend;
