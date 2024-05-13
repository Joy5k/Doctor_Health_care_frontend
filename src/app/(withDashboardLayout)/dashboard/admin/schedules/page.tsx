import { Box, Button, Stack, TextField } from "@mui/material";
import DoctorModal from "../doctors/components/DoctorModal";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const SchedulesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
          <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
          <TextField
            // onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            placeholder="Search doctor"
          ></TextField>
        </Stack>
        {/* {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={doctors} columns={columns} />
          </Box>
        ) : (
          <h1>Loading...</h1>
        )} */}
      </Box>
    );
};

export default SchedulesPage;