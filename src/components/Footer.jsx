import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Footer(props) {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        backgroundColor: "#000000",
        width: "100%",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography color="white">
          © {new Date().getFullYear()} Clarusway
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default Footer;
