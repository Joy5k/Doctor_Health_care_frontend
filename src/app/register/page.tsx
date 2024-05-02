import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "600",
            width: "100%",
            boxShadow: 1,
            borderRe: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Grid container spacing={2} my="1">
              <Grid item md={12}>
                <TextField label="Name" variant="outlined" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Contact Number"
                  type="tel"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Address"
                  type="text"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Button fullWidth={true}>Register</Button>
            <Typography component="p" fontWeight={300}>
              Do You have an account ?<Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
