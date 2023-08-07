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
  Typography,
  Box,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function SelfDisciplinePlannerTodoList() {
  const [priority, setPriority] = React.useState("Medium");

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  return (
    <Box component="div">
      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid xs={8}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
            color="primary"
          >
            Day 14
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: "right" }}
          >
            2023-08-05(토)
          </Typography>
        </Grid>
      </Grid>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
        variant="outlined"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="이곳에 오늘의 할 일을 입력해주세요..."
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
      <TableContainer component={Paper} sx={{ my: 2, height: "282px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "5%" }}>
                선택
              </TableCell>
              <TableCell align="left" sx={{ width: "60%" }}>
                제목
              </TableCell>

              <TableCell align="left" sx={{ width: "15%" }}>
                우선 순위
              </TableCell>
              <TableCell align="left" sx={{ width: "20%" }}>
                액션
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <Checkbox checked />
              </TableCell>
              <TableCell align="left">수학 수식 정리하기</TableCell>
              <TableCell align="left">높음</TableCell>
              <TableCell align="left">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell align="left">일본어 단어 10개 암기하기</TableCell>
              <TableCell align="left">보통</TableCell>
              <TableCell align="left">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Checkbox />
              </TableCell>
              <TableCell align="left">
                코딩테스트 ALL IN ONE 강의 1개 듣기
              </TableCell>
              <TableCell align="left">높음</TableCell>
              <TableCell align="left">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
