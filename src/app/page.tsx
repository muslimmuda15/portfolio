import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  // return (
  //   <Box >
  //     <Typography variant="h1">Hello World</Typography>
  //   </Box>
  // );
  redirect("/home");
}
