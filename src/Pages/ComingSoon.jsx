import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-01T00:00:00");
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: 2,
        px: { xs: 2, sm: 6, md: 12 },
      }}
    >
      <Typography fontWeight="bold" variant="h5" sx={{ pt: {xs: 1, sm: 3, md: 4} }}>
        ShortMesh
      </Typography>

      <Box sx={{ textAlign: "left", px: { xs: 0, sm: 4 } }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            pb: 4,
            fontSize: { xs: "4rem", sm: "5rem", md: "7.5rem" },
          }}
        >
          Coming Soon
        </Typography>

        <Grid container spacing={6} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} md={10}>
            <Box
              display="flex"
              gap={{ xs: 2, sm: 4 }}
              py={4}
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
            >
              {Object.entries(timeLeft).map(([unit, value], index, arr) => (
                <Box key={unit}>
                  <Typography
                    fontWeight="bold"
                    variant={isMobile ? "h5" : "h3"}
                  >
                    {value}
                    {index < arr.length - 1 && ":"}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {unit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{
              textAlign: { xs: "right", md: "right" },
              alignSelf: "flex-end",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="subtitle1">
              Great things take time, that is why we are taking our time to make
              great tech.
            </Typography>
            <Typography variant="subtitle1">
              reach us @{" "}
              <span style={{ fontWeight: 600 }}>developers@afkanerd.com</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ pb: 2, textAlign: { xs: "center", sm: "left" } }}
      >
        © {new Date().getFullYear()} ShortMesh. All rights reserved.
      </Typography>
    </Box>
  );
};

export default ComingSoon;
