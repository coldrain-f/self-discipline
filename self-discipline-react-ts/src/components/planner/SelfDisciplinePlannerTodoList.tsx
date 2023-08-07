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
  Button,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

interface Todo {
  id: number;
  done: boolean;
  title: string;
  priority: string;
}

export default function SelfDisciplinePlannerTodoList() {
  const [priority, setPriority] = React.useState("Medium");
  const [todoList, setTodoList] = React.useState<Todo[]>([
    {
      id: 1,
      done: false,
      title: "일본어 단어 10개 암기하기",
      priority: "보통",
    },
    {
      id: 2,
      done: false,
      title: "코딩테스트 ALL IN ONE 강의 1개 듣기",
      priority: "보통",
    },
    {
      id: 3,
      done: true,
      title: "자바스크립트 완전정복 스터디 10페이지 까지 학습",
      priority: "높음",
    },
  ]);

  const [selectedTodo, setSelectedTodo] = React.useState<Todo>();

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const handleDoneChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    todoId: number
  ) => {
    const newTodoList: Todo[] = todoList.map((todo) =>
      todo.id == todoId ? { ...todo, done: event.target.checked } : todo
    );

    setTodoList(newTodoList);
  };

  const handleTodoClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    todoId: number
  ) => {
    const todo: Todo = todoList.filter((todo) => todo.id == todoId)[0];
    setSelectedTodo(todo);
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
        variant="outlined"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
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
      <TableContainer component={Paper} sx={{ my: 2, height: "216px" }}>
        <Table stickyHeader sx={{ whiteSpace: "nowrap" }} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ width: "100px" }}>
                완료
              </TableCell>
              <TableCell align="left" sx={{ width: "300px" }}>
                제목
              </TableCell>
              <TableCell align="left" sx={{ width: "150px" }}>
                우선 순위
              </TableCell>
              <TableCell align="left" sx={{ width: "150px" }}>
                액션
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((todo) => (
              <TableRow hover key={todo.id}>
                <TableCell align="left" padding="checkbox">
                  <Checkbox
                    value={todo.done}
                    checked={todo.done}
                    onChange={(event) => handleDoneChange(event, todo.id)}
                  />
                </TableCell>
                <TableCell align="left">
                  <Button
                    onClick={(event) => handleTodoClick(event, todo.id)}
                    size="small"
                    color={selectedTodo?.id == todo.id ? "primary" : "inherit"}
                  >
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ textDecoration: todo.done ? "line-through" : "" }}
                    >
                      {todo.title}
                    </Typography>
                  </Button>
                </TableCell>
                <TableCell align="left">{todo.priority}</TableCell>
                <TableCell align="left" padding="none">
                  <IconButton>
                    <DeleteOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <EditOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
