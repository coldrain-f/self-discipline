import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SelfDisciplineAppBar from "./components/SelfDisciplineAppBar";
import SelfDisciplinePlanner from "./components/planner/SelfDisciplinePlanner";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Container maxWidth="xl">
      <SelfDisciplineAppBar />
      <Box>
        <Routes>
          <Route path="/planner" element={<SelfDisciplinePlanner />}></Route>
        </Routes>
      </Box>
    </Container>
  );
}
