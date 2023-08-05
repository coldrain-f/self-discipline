import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SelfDisciplinePlannerTodoList from "./SelfDisciplinePlannerTodoList";
import SelfDisciplinePlannerSidebar from "./SelfDisciplinePlannerSidebar";

export default function SelfDisciplinePlanner() {
  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <SelfDisciplinePlannerSidebar />
      </Grid>
      <Grid xs={5}>
        <SelfDisciplinePlannerTodoList />
      </Grid>
      <Grid xs={5}></Grid>
    </Grid>
  );
}
