import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SelfDisciplinePlannerTodoList from "./SelfDisciplinePlannerTodoList";
import SelfDisciplinePlannerSidebar from "./SelfDisciplinePlannerSidebar";
import SelfDisciplinePlannerReviewCheck from "./SelfDisciplinePlannerReviewCheck";
import SelfDisciplinePlannerMemo from "./SelfDisciplinePlannerMemo";
import { Box, Container, Divider } from "@mui/material";

export default function SelfDisciplinePlanner() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={2}>
          <SelfDisciplinePlannerSidebar />
        </Grid>
        <Grid xs={5}>
          <SelfDisciplinePlannerTodoList />
        </Grid>
        <Grid xs={5}></Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs={2}></Grid>
        <Grid xs={10}>
          <Divider />
          <SelfDisciplinePlannerReviewCheck />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs={2}></Grid>
        <Grid xs={10}>
          <SelfDisciplinePlannerMemo />
        </Grid>
      </Grid>
    </Box>
  );
}
