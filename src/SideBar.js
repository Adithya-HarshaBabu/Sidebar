import React, { useState } from "react";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ data, width, backgroundColor }) => {
  const [activeMenuIds, setActiveMenuId] = useState([]);
  const handleMenuClick = (id) => {
    activeMenuIds.includes(id)
      ? setActiveMenuId(activeMenuIds.filter((value) => value !== id))
      : setActiveMenuId([...activeMenuIds, id]);
  };
  return (
    <div className="sidenav" style={{ width, backgroundColor }}>
      {data.map(({ name, subMenus, menuId, urlString }) => {
        return (
          <div key={menuId}>
            <div>
              <div
                className="inline"
                data-testid={`icon-${name}`}
                onClick={() => handleMenuClick(menuId)}
              >
                {subMenus && (
                  <FontAwesomeIcon
                    icon={
                      activeMenuIds.includes(menuId)
                        ? faAngleDown
                        : faAngleRight
                    }
                  />
                )}
              </div>
              <div className="inline" data-testid="menu">
                {" "}
                <a href={urlString}>{name}</a>
              </div>
            </div>
            {subMenus &&
              activeMenuIds.includes(menuId) &&
              subMenus.map(({ name, urlString }) => {
                return (
                  <div key={name} className={`sub-menu`} data-testid="sub-menu">
                    {" "}
                    <a href={urlString}>{name}</a>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
