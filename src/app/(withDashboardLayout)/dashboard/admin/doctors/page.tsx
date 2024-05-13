import { Box, Button, Stack, TextField } from "@mui/material";

const DoctorPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>Create New Doctor</Button>
        <TextField size="small" placeholder="Search doctor"></TextField>
      </Stack>
    </Box>
  );
};

export default DoctorPage;
