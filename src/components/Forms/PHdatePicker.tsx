import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';

const PHdatePicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DesktopDatePicker defaultValue={dayjs(new Date().toDateString())} />

        </LocalizationProvider>

    );
};

export default PHdatePicker;