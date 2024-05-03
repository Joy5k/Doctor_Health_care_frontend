"use client"


import assets from "@/assets";
import { userLogin } from "@/services/actions/userLogin";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"


export type FormValues = {
  email: string
  password: string
}


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = async(values) => {
 
    try {
     const res=await userLogin(values)
    } catch (error:any) {
      console.log(error.message);
    }
  }
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
                Login PH Health care
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>

       
        <Grid container spacing={2} my="1">
          <Grid item md={6}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
                fullWidth={true}
                {...register("email")}
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
        </Grid>
        <Typography mb={1} component="p" fontWeight={300}>
          Forget Password
        </Typography>
        <Button type="submit" fullWidth={true}>Login</Button>
        <Typography component="p" fontWeight={300}>
          Don&apos;t have an account?
          <Link href="/register">Create an account</Link>
          </Typography>
          </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
