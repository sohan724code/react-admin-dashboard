import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./pages/global/TopBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
import Form from "./pages/Form/Form";
import Bar from "./pages/Bar/Bar";
import Pie from "./pages/Pie/Pie";
import Line from "./pages/Line/Line";
import Faq from "./pages/Faq/Faq";
import Calendar from "./pages/Calendar/Calendar";
import Geography from "./pages/Geography/Geography";
import SideBar from "./pages/global/SideBar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
