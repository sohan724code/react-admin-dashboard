import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  return (
    <Box sx={{ m: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to admin dashboard"} />
      </Box>
    </Box>
  );
};

export default Dashboard;
