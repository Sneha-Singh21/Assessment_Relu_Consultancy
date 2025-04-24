import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaShoppingCart,
  FaComments,
  FaWallet,
  FaUserFriends,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
// If you're using Firebase Auth:
import { getAuth, signOut } from "firebase/auth";

const menuItems = [
  { label: "Home", icon: <FaHome /> },
  { label: "Notifications", icon: <FaBell /> },
  { label: "Shop", icon: <FaShoppingCart /> },
  { label: "Conversation", icon: <FaComments /> },
  { label: "Wallet", icon: <FaWallet /> },
  { label: "Subscription", icon: <FaUserFriends /> },
  { label: "My Profile", icon: <FaUserCircle /> },
  { label: "Settings", icon: <FaCog /> },
];

const LeftSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const auth = getAuth(); // only if using Firebase
      await signOut(auth);    // remove this line if not using Firebase
      navigate("/");          // navigate to landing/login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-[17%] bg-white border-r border-gray-200 flex flex-col justify-between min-h-screen py-6 px-8">
      {/* Logo */}
      <div>
        <div className="text-3xl font-bold text-left mb-10">Art<span className="text-fuchsia-700 text-4xl">House</span></div>

        {/* Menu */}
        <nav>
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-gray-700 hover:text-black text-base cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 transition"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Logout */}
      <div
        className="text-red-500 hover:text-red-700 cursor-pointer flex items-center gap-2 px-2"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="text-lg" />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default LeftSidebar;
