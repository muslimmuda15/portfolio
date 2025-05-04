"use client";

import JsonInlineFormat from "@/components/JsonInlineFormat";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { experience, name, references } from "../constant/data";
import JsonBlockFormat from "@/components/JsonBlockFormat";

export default function Experience() {
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
            <JsonBlockFormat value={`${JSON.stringify(experience)}`} />
            {/* <div
              style={{
                display: "flex",
                color: "white",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>----</span>
              <span style={{ whiteSpace: "nowrap" }}>description</span>
              <span style={{ whiteSpace: "nowrap" }}>:</span>
              <span style={{ flex: 1, wordBreak: "break-word" }}>
                Ini adalah teks yang sangat panjang dan bisa turun ke baris
                bawah jika tidak cukup tempat.
              </span>
            </div> */}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
