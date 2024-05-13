import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { toast } from "sonner";

const DoctorPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const query:Record<string,any> = {}
    const [searchTerm, setSearchTerm] = useState<string>("")
    query["searchTerm"]=searchTerm


    const { data ,isLoading} = useGetAllDoctorsQuery({...query})
    const doctors = data?.doctors;
    const meta = data?.meta;

    const handleDelete = async(id: string) => {
        console.log(id);
        try {
            const res = await deleteSpecialties(id).unwrap();
            if (res?.id) {
                toast.success("Specialties deleted successfully")
            }
        } catch (error:any) {
            console.log(error.message);
        }
    }
    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex:1 },
        { field: "email", headerName: "Email", flex:1 },
        { field: "contactNumber", headerName: "Contact Number", flex:1 },
        { field: "gender", headerName: "Gender", flex:1 },
        { field: "appointmentFee", headerName: "Appointment Fee", flex:1 },
     
        {
          field: "Action",
          headerName: "Action",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
            return (
              <IconButton onClick={()=>handleDelete(row.id)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            );
          },
        },
      ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Button onClick={()=>setIsModalOpen(true)}>Create New Doctor</Button>
              <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
        <TextField  onChange={(e)=>setSearchTerm(e.target.value)} size="small" placeholder="Search doctor"></TextField>
          </Stack>
          {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default DoctorPage;
