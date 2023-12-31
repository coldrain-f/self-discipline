import * as React from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

export default function SelfDisciplinePlannerSidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box component="div">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <WorkspacesIcon />
            </ListItemIcon>
            <ListItemText primary="Workspace" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} selected>
              <ListItemIcon>
                <DateRangeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="플래너" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
