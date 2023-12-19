import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("MyResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MyResume.pdf";
        alink.click();
      });
    });
  };
  return (
    <Box
      sx={{
        position: "sticky",
        width: "100%",
        height: "5vh",
        backgroundColor: "primary.dark",
        border: 0,
        margin: 0,
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* logo */}
      <Box
        sx={{
          width: "10%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "secondary.main",
            fontFamily: "Mr De Haviland, cursive",
          }}
        >
          SarthakPant
        </Typography>
      </Box>
      {/* navigation */}
      <Box
        sx={{
          width: "55%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button href="https://sarthakpantblog.netlify.app/" target="blank">
          <Typography
            variant="subtitle1"
            sx={{
              color: "secondary.main",
            }}
          >
            Blogs
          </Typography>
        </Button>
        <Button>
          <Link to="about" smooth={true}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "secondary.main",
              }}
            >
              Aboutme
            </Typography>
          </Link>
        </Button>
        <Button>
          <Link to="exp" smooth={true}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "secondary.main",
              }}
            >
              Experience
            </Typography>
          </Link>
        </Button>
        <Button>
          <Link to="skill" smooth={true}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "secondary.main",
              }}
            >
              Skills
            </Typography>
          </Link>
        </Button>
        <Button>
          <Link to="pro" smooth={true}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "secondary.main",
              }}
            >
              Projects
            </Typography>
          </Link>
        </Button>
        <Button>
          <Link to="connect" smooth={true}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "secondary.main",
              }}
            >
              Connect
            </Typography>
          </Link>
        </Button>
        <Button onClick={onButtonClick}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "secondary.main",
            }}
          >
            Resume
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
