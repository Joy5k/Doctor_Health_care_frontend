import PHModal from '@/components/Shared/PHModal/PHModal';
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Box> 
            <Stack direction='row' justifyContent="space-between" alignItems='center'>
                <Button>Search Specialty</Button>
                <TextField size='small' placeholder='Search specialties'></TextField>
            </Stack>
        </Box>
    );
};

export default SpecialtiesPage;