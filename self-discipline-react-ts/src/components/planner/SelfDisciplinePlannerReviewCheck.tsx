import * as React from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function SelfDisciplinePlannerReviewCheck() {
  const [oneDayPrior, setOneDayPrior] = React.useState("Finished");
  const [threeDaysPrior, setThreeDaysPrior] = React.useState("Finished");
  const [sixDaysPrior, setSixDaysPrior] = React.useState("Finished");
  const [thirteenDaysPrior, setThirteenDaysPrior] = React.useState("Ongoing");
  const [twentyNineDaysPrior, setTwentyNineDaysPrior] = React.useState("None");
  const [fiftyNineDaysPrior, setFiftyNineDaysPrior] = React.useState("None");

  const handleOneDayPriorChange = (event: SelectChangeEvent) => {
    setOneDayPrior(event.target.value as string);
  };

  const handleThreeDaysPriorChange = (event: SelectChangeEvent) => {
    setThreeDaysPrior(event.target.value as string);
  };

  const handleSixDaysPriorChange = (event: SelectChangeEvent) => {
    setSixDaysPrior(event.target.value as string);
  };

  const handleThirteenDaysPriorChange = (event: SelectChangeEvent) => {
    setThirteenDaysPrior(event.target.value as string);
  };

  const handleTwentyNineDaysPriorChange = (event: SelectChangeEvent) => {
    setTwentyNineDaysPrior(event.target.value as string);
  };

  const handleFiftyNineDaysPriorChange = (event: SelectChangeEvent) => {
    setFiftyNineDaysPrior(event.target.value as string);
  };

  return (
    <Box component="div" sx={{ mr: 3 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ my: 2, fontWeight: "bold" }}
        color="primary"
      >
        복습 체크
      </Typography>
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ width: "16.666%", fontWeight: "bold" }}
              >
                1일 전*
              </TableCell>

              <TableCell
                align="left"
                sx={{ width: "16.666%", fontWeight: "bold" }}
              >
                3일 전*
              </TableCell>
              <TableCell
                align="left"
                sx={{ width: "16.666%", fontWeight: "bold" }}
              >
                6일 전*
              </TableCell>
              <TableCell
                align="left"
                sx={{ width: "16.666%", fontWeight: "bold" }}
              >
                13일 전*
              </TableCell>
              <TableCell
                align="left"
                sx={{ width: "16.666%", fontWeight: "bold" }}
              >
                29일 전
              </TableCell>
              <TableCell
                align="left"
                sx={{ width: "16.666%", fontWeight: "bold" }}
              >
                59일 전
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    border: 0,
                  }}
                  variant="outlined"
                >
                  <FormControl
                    variant="standard"
                    sx={{ mr: 1, width: "70px" }}
                    size="small"
                    disabled={oneDayPrior == "None"}
                  >
                    <Select
                      id="review-status-select"
                      value={oneDayPrior}
                      onChange={handleOneDayPriorChange}
                    >
                      {oneDayPrior == "None" && (
                        <MenuItem value="None">없음</MenuItem>
                      )}

                      <MenuItem value="Finished">완료</MenuItem>
                      <MenuItem value="Ongoing">미완료</MenuItem>
                    </Select>
                  </FormControl>
                  <Link
                    component={RouterLink}
                    to="#"
                    sx={{ mx: 2 }}
                    variant="body2"
                    underline="none"
                  >
                    이동
                  </Link>
                </Paper>
              </TableCell>
              <TableCell align="left">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    border: 0,
                  }}
                  variant="outlined"
                >
                  <FormControl
                    variant="standard"
                    sx={{ mr: 1, width: "70px" }}
                    size="small"
                    disabled={threeDaysPrior == "None"}
                  >
                    <Select
                      id="review-status-select"
                      value={threeDaysPrior}
                      onChange={handleThreeDaysPriorChange}
                    >
                      {threeDaysPrior == "None" && (
                        <MenuItem value="None">없음</MenuItem>
                      )}

                      <MenuItem value="Finished">완료</MenuItem>
                      <MenuItem value="Ongoing">미완료</MenuItem>
                    </Select>
                  </FormControl>
                  <Link
                    component={RouterLink}
                    to="#"
                    sx={{ mx: 2 }}
                    variant="body2"
                    underline="none"
                  >
                    이동
                  </Link>
                </Paper>
              </TableCell>
              <TableCell align="left">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    border: 0,
                  }}
                  variant="outlined"
                >
                  <FormControl
                    variant="standard"
                    sx={{ mr: 1, width: "70px" }}
                    size="small"
                    disabled={sixDaysPrior == "None"}
                  >
                    <Select
                      id="review-status-select"
                      value={sixDaysPrior}
                      onChange={handleSixDaysPriorChange}
                    >
                      {sixDaysPrior == "None" && (
                        <MenuItem value="None">없음</MenuItem>
                      )}

                      <MenuItem value="Finished">완료</MenuItem>
                      <MenuItem value="Ongoing">미완료</MenuItem>
                    </Select>
                  </FormControl>
                  <Link
                    component={RouterLink}
                    to="#"
                    sx={{ mx: 2 }}
                    variant="body2"
                    underline="none"
                  >
                    이동
                  </Link>
                </Paper>
              </TableCell>
              <TableCell align="left">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    border: 0,
                  }}
                  variant="outlined"
                >
                  <FormControl
                    variant="standard"
                    sx={{ mr: 1, width: "70px" }}
                    size="small"
                    disabled={thirteenDaysPrior == "None"}
                  >
                    <Select
                      id="review-status-select"
                      value={thirteenDaysPrior}
                      onChange={handleThirteenDaysPriorChange}
                    >
                      {thirteenDaysPrior == "None" && (
                        <MenuItem value="None">없음</MenuItem>
                      )}

                      <MenuItem value="Finished">완료</MenuItem>
                      <MenuItem value="Ongoing">미완료</MenuItem>
                    </Select>
                  </FormControl>
                  <Link
                    component={RouterLink}
                    to="#"
                    sx={{ mx: 2 }}
                    variant="body2"
                    underline="none"
                  >
                    이동
                  </Link>
                </Paper>
              </TableCell>
              <TableCell align="left">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    border: 0,
                  }}
                  variant="outlined"
                >
                  <FormControl
                    variant="standard"
                    sx={{ mr: 1, width: "70px" }}
                    size="small"
                    disabled={twentyNineDaysPrior == "None"}
                  >
                    <Select
                      id="review-status-select"
                      value={twentyNineDaysPrior}
                      onChange={handleTwentyNineDaysPriorChange}
                    >
                      {twentyNineDaysPrior == "None" && (
                        <MenuItem value="None">없음</MenuItem>
                      )}

                      <MenuItem value="Finished">완료</MenuItem>
                      <MenuItem value="Ongoing">미완료</MenuItem>
                    </Select>
                  </FormControl>
                  <Link
                    component={RouterLink}
                    to="#"
                    sx={{ mx: 2 }}
                    variant="body2"
                    underline="none"
                  >
                    이동
                  </Link>
                </Paper>
              </TableCell>
              <TableCell align="left">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    border: 0,
                  }}
                  variant="outlined"
                >
                  <FormControl
                    variant="standard"
                    sx={{ mr: 1, width: "70px" }}
                    size="small"
                    disabled={fiftyNineDaysPrior == "None"}
                  >
                    <Select
                      id="review-status-select"
                      value={fiftyNineDaysPrior}
                      onChange={handleFiftyNineDaysPriorChange}
                    >
                      {fiftyNineDaysPrior == "None" && (
                        <MenuItem value="None">없음</MenuItem>
                      )}

                      <MenuItem value="Finished">완료</MenuItem>
                      <MenuItem value="Ongoing">미완료</MenuItem>
                    </Select>
                  </FormControl>
                  <Link
                    component={RouterLink}
                    to="#"
                    sx={{ mx: 2 }}
                    variant="body2"
                    underline="none"
                  >
                    이동
                  </Link>
                </Paper>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
