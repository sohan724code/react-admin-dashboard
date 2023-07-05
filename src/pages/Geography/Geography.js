import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import GeographyChart from "../../components/GeographyChart/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ m: "20px" }}>
      <Header
        title={"Geography CHART"}
        subtitle="Geography Chart for my webpage"
      />
      <Box
        sx={{
          height: "75vh",
          border: `2px solid ${colors.grey[100]}`,
          borderRadius: "4px",
        }}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
