import Paper from "@mui/material/Paper";
import StackWithSpaceBetween from "../components/StackWithSpaceBetween";

const OrderSummary = () => {
  return (
    <Paper elevation={3} sx={{ mt: "2rem", p: ".9rem" }}>
      <StackWithSpaceBetween title={"subtotal"} cost={12.5} />
    </Paper>
  );
};

export default OrderSummary;
