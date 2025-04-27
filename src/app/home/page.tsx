import JsonFormat from "@/components/JsonFormat";
import {
  Box,
  Typography,
  Link,
  Stack,
  Divider,
  Grid,
  Avatar,
} from "@mui/material";
import React from "react";

const name = { name: { label: "Rachmad Alif Firdaus", url: "/" } };
const references = [
  { label: "resume.json", url: "/resume.json" },
  { label: "projects.json", url: "/projects.json" },
];
const link = {
  resume: { label: "/resume", url: "/resume" },
  github: {
    label: "/muslimmuda15",
    url: "https://rachmadalif.github.io/projects",
  },
  linkedin: {
    label: "/rachmad-alif-firdaus",
    url: "www.linkedin.com/in/rachmad-alif-firdaus",
  },
};
const me = {
  summary: "Web and mobile developer",
  currently: "Working as a Software and AI Engineer",
  at: "PT Garasilabs Kolektif Teknologi",
  "studying at": "Institut Teknologi Adhi Tama Surabaya",
  "I enjoy": [
    "Coding",
    "Gaming",
    "Playing badminton",
    "Learning new things about technology",
  ],
  "contact me at": "muslimmuda15@gmail.com",
};

const HomePage = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="column" spacing={2}>
        <Box sx={{ p: 1, px: 2 }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="h5" component="h1">
              <JsonFormat value={JSON.stringify(name)} />
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography variant="h5" component="h1">
                <JsonFormat value={`${JSON.stringify(references)}`} />
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ p: 2, px: 2 }}>
          <Grid container direction="row">
            <Grid container spacing={4} size={5} sx={{ px: 4 }}>
              <Avatar
                src="/photo.jpg"
                alt={name.name.label}
                sx={{
                  width: 200,
                  height: 200,
                  margin: "auto",
                  border: "2px solid #1976d2",
                }}
              />
              <Typography variant="h5" component="h1">
                <JsonFormat value={`${JSON.stringify(link)}`} />
              </Typography>
            </Grid>
            <Grid size={7}>
              <Typography variant="h5" component="h1">
                <JsonFormat value={`${JSON.stringify(me)}`} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomePage;
