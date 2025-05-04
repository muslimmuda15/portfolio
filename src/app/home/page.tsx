import { Box, Typography, Stack, Divider, Grid, Avatar } from "@mui/material";
import React from "react";
import { link, me, name, references } from "@/app/constant/data";
import JsonInlineFormat from "@/components/JsonInlineFormat";
import JsonBlockFormat from "@/components/JsonBlockFormat";

const HomePage = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="column" spacing={2}>
        <Box sx={{ p: 1, px: 2 }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="h5" component="h1">
              <JsonInlineFormat value={JSON.stringify(name)} />
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography variant="h5" component="h1">
                <JsonInlineFormat value={`${JSON.stringify(references)}`} />
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ p: 2, px: 2 }}>
          <Grid container direction="row">
            <Grid
              container
              direction="column"
              spacing={4}
              size={5}
              sx={{ px: 4 }}
            >
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
                <JsonBlockFormat value={`${JSON.stringify(link)}`} />
              </Typography>
            </Grid>
            <Grid size={7}>
              <Typography variant="h5" component="h1">
                <JsonBlockFormat value={`${JSON.stringify(me)}`} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomePage;
