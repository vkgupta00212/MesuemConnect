/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from '../assets/MesuemConnectLogo.png';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Ticket Booking",
      icon: <InfoIcon />,
      path: "/ticket",
    },
    {
      text: "Canteen",
      icon: <CommentRoundedIcon />,
      path: "/canteen",
    },
    {
      text: "Maps",
      icon: <LocationOnIcon />,
      path: "/contact",
    },
    {
      text: "FeedBack",
      icon: <ThumbUpAltIcon />,
      path: "/work",
    },
  ];

  const navigate = useNavigate();

  const login = ()=>{
    navigate("/login")
  }


  return (
    <nav>
      <div className="allNav">
        <div className="nav-logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-links-container">
          <Link to="/">Home</Link>
          <Link to="/ticket">Ticket Booking</Link>
          <Link to="/canteen">
          Canteen
          </Link>
          <Link to="/contact">
            <LocationOnIcon className="navbar-cart-icon" />
          </Link>
          <Link to="/work">
            <ThumbUpAltIcon className="navbar-cart-icon" />
          </Link>
          <button className="primary-button" onClick={login}>Login</button>
        </div>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
