import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      {new Date().getFullYear()}
      {". "}
      <Link color="inherit" href="https://github.com/coldrain-f/">
        coldrain-f
      </Link>{" "}
      {"All rights reserved."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Evolvify</Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
