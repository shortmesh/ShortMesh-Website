import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { GithubOutlined } from "@ant-design/icons";

const NavComp = () => {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3, md: 4 },
        bgcolor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo + Name */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/logo.svg"
          alt="Logo"
          sx={{ height: 30, mr: 1 }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: { xs: 15, md: 20 } }}
        >
          ShortMesh
        </Typography>
      </Box>

      {/* Buttons + GitHub */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* <Button
          variant="text"
          sx={{ textTransform: "none", borderRadius: 7, }}
        >
          Request Demo
        </Button> */}
        <a href="https://github.com/shortmesh" target="_blank">
          {" "}
          <GithubOutlined style={{ fontSize: 27 }} />{" "}
        </a>
      </Box>
    </Box>
  );
};

export default NavComp;
