import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
    const { data, isLoading } = useGetAllSpecialtiesQuery({});
    const [deleteSpecialties]=useDeleteSpecialtyMutation()
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
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
     flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={30} height={30} alt="icon"></Image>
          </Box>
        );
      },
    },
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
        <Button>Search Specialty</Button>
        <TextField size="small" placeholder="Search specialties"></TextField>
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
