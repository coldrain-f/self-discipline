import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function App() {
  const label: string = "Self discipline";

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          color="primary"
        >
          {label.toUpperCase()}
        </Typography>
      </Box>
    </Container>
  );
}
