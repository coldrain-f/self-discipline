import * as React from "react";
import {
  Box,
  Checkbox,
  Collapse,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function SelfDisciplinePlanner() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Group" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} selected>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Planner" color="primary" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Grid>
      <Grid xs={5}>
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
      </Grid>
      <Grid xs={5}></Grid>
    </Grid>
  );
}
