import Box from "@mui/material/Box";
import SelfDisciplineAppBar from "./components/SelfDisciplineAppBar";
import SelfDisciplinePlanner from "./components/planner/SelfDisciplinePlanner";
import SelfDisciplineFooter from "./components/SelfDisciplineFooter";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <SelfDisciplineAppBar />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/planner" element={<SelfDisciplinePlanner />} />
        </Routes>
      </Box>
      <SelfDisciplineFooter />
    </Box>
  );
}
