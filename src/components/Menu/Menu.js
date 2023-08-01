import React, { useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import "./Menu.css";

export default function Menu({ menuData }) {
  const [searchInput, setSearchInput] = useState("");

  let dataToDisplay = menuData;

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  if (searchInput) {
    dataToDisplay = menuData.filter((menu) => {
      const { name } = menu;
      return name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  const renderContent = () => {
    if (dataToDisplay.length === 0) {
      return <div className="Menu__noResult">No results for:{searchInput}</div>;
    } else {
      return (
        <>
          {dataToDisplay.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </>
      );
    }
  };

  return (
    <>
      <div className="Menu__search">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
      </div>
      <div className="Menu__content">{renderContent()}</div>
    </>
  );
}
