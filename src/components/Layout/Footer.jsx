import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white" }}>
        <Box sx={{my:0,"& svg":{
            fontSize:"60px",
            cursor:'pointer',
            mr:2,
        },
         "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:"all 400ms"
         }}}>
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
        </Box>
        <Typography
          varient="h6"
          sx={{
            "@media(max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy;Techabhi AB <small>2023</small>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
