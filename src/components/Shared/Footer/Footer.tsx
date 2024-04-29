import { Box, Container,Stack,Typography } from "@mui/material";
import Link from "next/link";
// import facebookIcon from "@/assets"
import Image from "next/image";
const Footer = () => {
    return (
        <Box bgcolor='rgb(17,26,34)'>
            <Container>
            <Stack direction="row" justifyContent="center" gap={4}>
                <Typography color="#fff" component={Link} href="/consultation">Consultation</Typography>
                <Typography color="#fff" component={Link} href="/login">Health Plans</Typography>
                <Typography color="#fff">Medicine</Typography>
                <Typography color="#fff">Diagnostics</Typography>
                <Typography color="#fff">NGOs</Typography>
                </Stack>
                <Stack direction="row" justifyContent="center" gap={2} py={3}>
               <Image src={"facebookIcon"} width={30} height={30} alt="facebook"/>
               <Image src={"facebookIcon"} width={30} height={30} alt="facebook"/>
               <Image src={"facebookIcon"} width={30} height={30} alt="facebook"/>
               <Image src={"facebookIcon"} width={30} height={30} alt="facebook"/>
            </Stack>
            <div className="border-b-[1px] border-dashed"></div>
            </Container>
        </Box>
    );
};

export default Footer;