import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useMode } from "./theme";
import Topbar from "./screens/global/Topbar";
import Sidebar from "./screens/global/Sidebar";
import Dashboard from "./screens/Dashboard";
import Team from "./screens/Team";
import Contacts from "./screens/Contacts";
import Invoices from "./screens/Invoices";
import Form from "./screens/Form";
import Calendar from "./screens/Calendar";
import FAQ from "./screens/FAQ";
import Bar from "./screens/Bar";
import Pie from "./screens/Pie";
import Line from "./screens/Line";
import Geography from "./screens/Geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <AppNavigation />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const AppNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/geography" element={<Geography />} />
    </Routes>
  );
};

export default App;
