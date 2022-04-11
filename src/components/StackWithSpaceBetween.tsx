import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const stackWithSpaceBetween = {
  display: "flex",
  justifyContent: "space-between",
  WebkitJustifyContent: "space-between",
};

const StackWithSpaceBetween = () => {
  return (
    <Stack direction="row" sx={stackWithSpaceBetween}>
      <Typography>Subtototal</Typography>
      <Typography>$15.98</Typography>
    </Stack>
  );
};

export default StackWithSpaceBetween;
