import JsonFormat from "@/components/JsonFormat";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { name, references, resume } from "@/app/constant/data";

export default function ResumePage() {
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
        <Typography variant="h5" component="h1">
          <JsonFormat value={`${JSON.stringify(resume)}`} />
        </Typography>
      </Stack>
    </Box>
  );
}
