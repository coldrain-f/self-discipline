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
          placeholder="할 일을 입력해주세요."
        />
        <IconButton sx={{ p: "10px" }}>
          <AddIcon />
        </IconButton>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{}}>
          <TableHead>
            <TableRow>
              <TableCell align="left">선택</TableCell>
              <TableCell align="left">제목</TableCell>
              <TableCell align="left">상태</TableCell>
              <TableCell align="left">우선 순위</TableCell>
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
                미완료
              </TableCell>
              <TableCell align="left" sx={{ width: "15%" }}>
                보통
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
