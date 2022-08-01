import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 328,
          height: 100,
          backgroundColor: "LightSkyBlue",
          border: "1px solid black",
          borderStyle: "dashed",
          cursor: "pointer",
          "&:hover": {
            filter: "grayscale(0.30)",
          },
        },
      }}
    >
      <Paper elevation={3}>{props.children}</Paper>
    </Box>
  );
}
