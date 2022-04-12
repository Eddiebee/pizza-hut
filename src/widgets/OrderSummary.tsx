import Paper from "@mui/material/Paper";
import StackWithSpaceBetween from "../components/StackWithSpaceBetween";

const OrderSummary = () => {
  return (
    <Paper
      elevation={3}
      sx={{ mt: "2rem", p: ".9rem", bgcolor: "secondary.dark" }}
    >
      <StackWithSpaceBetween />
      <StackWithSpaceBetween />
      <StackWithSpaceBetween />
    </Paper>
  );
};

export default OrderSummary;
