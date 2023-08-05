import * as React from "react";
import {
  Checkbox,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function SelfDisciplinePlannerTodoList() {
  return (
    <Box>
      <Paper
        component="form"
        sx={{
          my: 2,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
        variant="outlined"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Please enter your to-do list."
        />
        <IconButton sx={{ p: "10px" }}>
          <AddIcon />
        </IconButton>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{}}>
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left" sx={{ width: "10%" }}>
                <Checkbox />
              </TableCell>
              <TableCell align="left" sx={{ width: "60%" }}>
                일본어 단어 10개 암기하기
              </TableCell>
              <TableCell align="left" sx={{ width: "15%" }}>
                B
              </TableCell>
              <TableCell align="left" sx={{ width: "15%" }}>
                C
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
