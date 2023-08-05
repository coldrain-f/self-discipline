import { Box, Button, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function SelfDisciplinePlannerMemo() {
  return (
    <Box component="div">
      <TextField
        placeholder="오늘의 메모를 입력해주세요..."
        multiline
        rows={4}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button
        variant="outlined"
        sx={{ mb: 4 }}
        fullWidth
        startIcon={<AddCircleOutlineIcon />}
      >
        메모 등록
      </Button>
    </Box>
  );
}
