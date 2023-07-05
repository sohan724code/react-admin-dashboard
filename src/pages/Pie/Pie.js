import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import PieChart from "../../components/PieChart/PieChart";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ m: "20px" }}>
      <Header title={"PIE CHART"} subtitle="PIE Chart for my webpage" />
      <Box sx={{ height: "75vh" }}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
