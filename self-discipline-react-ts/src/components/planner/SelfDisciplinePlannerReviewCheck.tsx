import { Button, ButtonGroup, Box, Typography } from "@mui/material";

export default function SelfDisciplinePlannerReviewCheck() {
  return (
    <Box component="div">
      <Typography variant="h5" component="div" sx={{ my: 2 }}>
        복습 확인
      </Typography>
      <ButtonGroup variant="contained" color="primary" fullWidth>
        <Button>1일 전</Button>
        <Button>3일 전</Button>
        <Button>6일 전</Button>
        <Button>13일 전</Button>
        <Button>29일 전</Button>
        <Button>59일 전</Button>
      </ButtonGroup>
    </Box>
  );
}
