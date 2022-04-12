import CartItem from "./components/CartItem";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import theme from "./components/theme";
import { Avatar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import OrderSummary from "./widgets/OrderSummary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: 645, bgcolor: "#fff", flex: 1 }}>
          <Box sx={{ height: 120 }} bgcolor="primary.main" />
          <Avatar sx={{ width: 120, height: 120, mx: "auto", mt: -8 }}></Avatar>
          <Typography textAlign="center" textTransform="uppercase">
            Your order from
            <Typography variant="h6" sx={{ mb: "2rem" }}>
              Pizza Hut
            </Typography>
          </Typography>

          {/* CartItem component */}
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <CartItem />
            <CartItem />
            {/* Add Beverage Button */}
            <Button variant="outlined" sx={{ width: "10rem" }}>
              Add A Beverage
            </Button>

            {/* Summary */}
            <OrderSummary />
            <Button
              variant="contained"
              sx={{
                justifySelf: "flex-end",
                mt: "2rem",
                color: "common.white",
              }}
            >
              Checkout
            </Button>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
