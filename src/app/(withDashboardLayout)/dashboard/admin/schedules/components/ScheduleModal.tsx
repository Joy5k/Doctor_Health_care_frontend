import PHDatePicker from "@/components/Forms/PHdatePicker";
import PHForms from "@/components/Forms/PHForms";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    try {
      const res = await createSchedule(values).unwrap();
      // console.log(res);
      if (res?.length) {
        toast.success("Schedules created successfully!");
        setOpen(false);
      }
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
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item spacing={12}>
            <PHDatePicker name="startDate" label="Start Date"></PHDatePicker>
          </Grid>
          <Grid item spacing={12}>
            <PHDatePicker name="endDate" label="End Date"></PHDatePicker>
          </Grid>
          <Grid item spacing={6}>
            <PHDatePicker name="startTime" label="Start Time"></PHDatePicker>
          </Grid>
          <Grid item spacing={6}>
            <PHDatePicker name="endTIme" label="End Time"></PHDatePicker>
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create{" "}
        </Button>
      </PHForms>
    </PHModal>
  );
};

export default ScheduleModal;
