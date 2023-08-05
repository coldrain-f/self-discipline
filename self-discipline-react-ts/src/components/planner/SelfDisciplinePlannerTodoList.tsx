import * as React from "react";
import {
  Checkbox,
  IconButton,
  InputBase,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function SelfDisciplinePlannerTodoList() {
  const [priority, setPriority] = React.useState("Medium");

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

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
          placeholder="이곳에 할 일을 입력해주세요..."
          startAdornment={
            <InputAdornment position="start">
              <PlaylistAddIcon />
            </InputAdornment>
          }
        />
        <InputLabel id="priority" sx={{ mr: 2 }}>
          우선 순위
        </InputLabel>
        <FormControl variant="standard" sx={{ mr: 1 }}>
          <Select
            labelId="priority"
            id="priority-select"
            value={priority}
            onChange={handlePriorityChange}
          >
            <MenuItem value="High">높음</MenuItem>
            <MenuItem value="Medium">중간</MenuItem>
            <MenuItem value="Low">낮음</MenuItem>
          </Select>
        </FormControl>
        <IconButton sx={{ p: "10px" }}>
          <AddIcon />
        </IconButton>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{}}>
          <TableHead>
            <TableRow>
              <TableCell align="center">선택</TableCell>
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
