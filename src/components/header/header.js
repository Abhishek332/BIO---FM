import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { APIContext } from "../../App";

const Header = () => {
  const Val = useContext(APIContext);

  const handleClick = () => {
    Val.setMain(!Val.main);
    if (Val.main) {
      Val.setToggle({ display: "flex" });
    } else {
      Val.setToggle({ display: "none" });
    }
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <MenuIcon className="menu-icon" onClick={handleClick} />
        <div className="center">
          <AccountCircleIcon className="avatar" />
          <p>Abhishek</p>
          <div className="edit-wrapper">
            <span>Web Developer</span>
            <EditIcon className="edit" />
          </div>
        </div>
        <button className="editButton">Edit Blocks</button>
      </div>
    </div>
  );
};

export default Header;
