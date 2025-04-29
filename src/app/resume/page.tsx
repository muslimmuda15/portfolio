import { Box, Divider, Stack, Typography } from "@mui/material";
import { name, references, resume } from "@/app/constant/data";
import JsonInlineFormat from "@/components/JsonInlineFormat";
import JsonBlockFormat from "@/components/JsonBlockFormat";

export default function ResumePage() {
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
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            minHeight: "100vh",
          }}
        >
          <Typography variant="h5" component="h1" sx={{ width: "1200px" }}>
            <JsonBlockFormat value={`${JSON.stringify(resume)}`} />
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
