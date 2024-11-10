import React, { useState } from "react";
import { Menu, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FaHeartbeat, FaUtensils, FaTint, FaBed, FaBook, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const items = [
  {
    key: "1",
    icon: <FaHeartbeat className="text-2xl" />,
    label: "Exercise",
    path: "/exercise",
  },
  {
    key: "2",
    icon: <FaUtensils className="text-2xl" />,
    label: "Diet",
    path: "/diet",
  },
  {
    key: "3",
    icon: <FaTint className="text-2xl" />,
    label: "Hydration",
    path: "/hydration",
  },
  {
    key: "4",
    icon: <FaBed className="text-2xl" />,
    label: "Sleep",
    path: "/sleep",
  },
  {
    key: "5",
    icon: <FaBook className="text-2xl" />,
    label: "Diary",
    path: "/diary",
  },
];

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1"); // State to handle selected item
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  const handleMenuClick = (key, path) => {
    setSelectedKey(key); // Update selectedKey state
    navigate(path); // Navigate to the clicked item's path
  };

  return (
    <div className="flex flex-col max-h-screen bg-black pt-10 px-5 overflow-hidden sticky ">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        className="mb-2 z-10 bg-black"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        selectedKeys={[selectedKey]} // Set selected key based on state
        className={`flex-1 overflow-y-auto ${collapsed ? 'px-4' : 'px-8'}`}
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={() => handleMenuClick(item.key, item.path)}
          >
            {item.label}
          </Menu.Item>
        ))}
        <div className="border-t border-gray-600 mt-36 pl-2">
          <Menu.Item
            key="profile"
            icon={<FaUserCircle className="text-2xl" />}
            className="text-white p-3 text-left"
            onClick={() => handleMenuClick("profile", "/profile")}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<FaSignOutAlt className="text-2xl" />}
            className="text-white p-3 text-left"
            onClick={() => handleMenuClick("logout", "/logout")}
          >
            Logout
          </Menu.Item>
        </div>
      </Menu>
    </div>
  );
};

export default SideNavbar;
