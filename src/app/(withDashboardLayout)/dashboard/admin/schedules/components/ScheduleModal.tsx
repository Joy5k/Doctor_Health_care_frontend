import PHdatePicker from "@/components/Forms/PHdatePicker";
import PHForms from "@/components/Forms/PHForms";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
  
const ScheduleModal =({open,setOpen}:TProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleFormSubmit = async(values:FieldValues) => {
    try {
        
    } catch (error:any) {
        console.error(error.message);
    }
}
    return (
        <PHModal open={isModalOpen} setOpen={setIsModalOpen} title="Create Schedule">
            <PHForms onSubmit={handleFormSubmit}>
                <PHdatePicker></PHdatePicker>
                <Button type="submit">Create Schedule</Button>
            </PHForms>
        </PHModal>
    );
};

export default ScheduleModal;