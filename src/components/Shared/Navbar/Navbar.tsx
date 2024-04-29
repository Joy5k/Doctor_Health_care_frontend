import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
    return <Container>
        <Stack py={2} direction='row' justifyContent="space-between">
            <Typography variant="h4" component={Link} href="/" fontWeight={600}>
                P<Box component="span" color="primary.main">
                H
                </Box>

                Health care
            </Typography>
            <Stack direction="row" justifyContent="space-between" gap={4}>
                <Typography component={Link} href="/consultation">Consultation</Typography>
                <Typography component={Link} href="/login">Health Plans</Typography>
                <Typography>Medicine</Typography>
                <Typography>Diagnostics</Typography>
                <Typography>NGOs</Typography>
            </Stack>
            <Button component={Link} href="/login">Login</Button>
        </Stack>
    </Container>
};

export default Navbar;