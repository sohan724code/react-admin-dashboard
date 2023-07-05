import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart/BarChart";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ m: "20px" }}>
      <Header title={"BAR CHART"} subtitle="Bar Chart for my webpage" />
      <Box sx={{ height: "75vh" }}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
