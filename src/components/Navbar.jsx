import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import VideocamIcon from "@mui/icons-material/Videocam";



export default function Navbar() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <VideocamIcon
            onClick={() => navigate("")}
            fontSize="large"
            sx={{ marginRight: "1rem", cursor: "pointer" }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Movie App
          </Typography>
          <Button onClick={() => navigate("login")} color="inherit">
            Login
          </Button>
          <Button onClick={() => navigate("register")} color="inherit">
            Register
          </Button>
          <IconButton sx={{ marginLeft: "1rem" }}>
            <Avatar alt="" />
            {/* <Avatar alt="Remy Sharp" src={auth?.currentUser?.photoURL} /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
