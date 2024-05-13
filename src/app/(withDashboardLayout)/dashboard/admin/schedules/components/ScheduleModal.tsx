import PHDatePicker from "@/components/Forms/PHdatePicker";
import PHForms from "@/components/Forms/PHForms";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleFormSubmit = async (values: FieldValues) => {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <PHModal
      open={isModalOpen}
      setOpen={setIsModalOpen}
      title="Create Schedule"
    >
      <PHForms onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{width:"400px"}}>
          <Grid item spacing={12}>
            <PHDatePicker name="startDate" label="Start Date"></PHDatePicker>
          </Grid>
          <Grid item spacing={12}>
            <PHDatePicker name="endDate" label="End Date"></PHDatePicker>
          </Grid>
        </Grid>
        <Button type="submit">Create </Button>
      </PHForms>
    </PHModal>
  );
};

export default ScheduleModal;
