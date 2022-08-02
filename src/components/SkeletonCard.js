import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonCard() {
  return (
    <Stack spacing={1} className="mt-2 mb-2">
      <Skeleton variant="rectangular" width={200} height={100} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
    </Stack>
  );
}
