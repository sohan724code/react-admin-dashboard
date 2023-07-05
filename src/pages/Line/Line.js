import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart/LineChart";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ m: "20px" }}>
      <Header title={"Line CHART"} subtitle="Line Chart for my webpage" />
      <Box sx={{ height: "75vh" }}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
