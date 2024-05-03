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
import { useForm, SubmitHandler } from "react-hook-form"
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";


interface IPatientData{
  email: string
  contactNumber: string
  name: string 
  address: string
}
interface IPatientRegisterFormData{
  password: string
  patient:IPatientData
}
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>()
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async(values) => {
    const data = modifyPayload(values)
    try {
      const res=await registerPatient(data)
    } catch (error:any) {
      console.log(error.message);
    }
  }
  return (
    <Container
     
    >
      <Stack
        sx={{
          height:"100vh",
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
            textAlign: "center"
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
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} my="1">
              <Grid item md={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                    fullWidth={true}
                    {...register("patient.name")}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                    fullWidth={true}
                    {...register("patient.email")}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                    fullWidth={true}
                    {...register("password")}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Contact Number"
                  type="tel"
                  variant="outlined"
                  fullWidth={true}
                  {...register("patient.contactNumber")}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Address"
                  type="text"
                  variant="outlined"
                    fullWidth={true}
                    {...register("patient.address")}
                />
              </Grid>
            </Grid>
            <Button fullWidth={true}>Register</Button>
            <Typography component="p" fontWeight={300}>
              Do You have an account ?<Link href="/login">Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
