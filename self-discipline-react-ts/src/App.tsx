import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SelfDisciplineAppBar from "./components/SelfDisciplineAppBar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Container maxWidth="xl">
      <SelfDisciplineAppBar />
    </Container>
  );
}
