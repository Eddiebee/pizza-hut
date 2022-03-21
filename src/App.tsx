import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import OutlinedInput from "@mui/material/OutlinedInput";
import theme from "./components/theme";
import { Avatar, Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: 645, bgcolor: "#fff" }}>
          <Box sx={{ height: 120, bgcolor: "#ff6d00" }} />
          <Avatar sx={{ width: 120, height: 120, mx: "auto", mt: -8 }}></Avatar>
          <Typography textAlign="center" textTransform="uppercase">
            Your order from
            <Typography variant="h6">Pizza Hut</Typography>
          </Typography>

          <Box
            sx={{
              maxWidth: "sm",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              justifyItems: "center",
              overflow: "hidden",
              fontWeight: "bold",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
                spacing={2}
              >
                <Typography variant="body1">Bristish Pizza | Medium</Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
                spacing={2}
              >
                <IconButton aria-label="add" size="small">
                  <AddRoundedIcon fontSize="small" />
                </IconButton>
                <OutlinedInput
                  sx={{ width: "2.5rem", height: "2rem" }}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
                <IconButton aria-label="minus" size="small">
                  <RemoveRoundedIcon fontSize="small" />
                </IconButton>
              </Stack>
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
                spacing={2}
              >
                <Typography variant="body1">$7.99</Typography>
                <IconButton aria-label="remove" size="small">
                  <HighlightOffTwoToneIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
