import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { Typography } from "@mui/material";

const CartItem = () => {
  return (
    <Box
      sx={{
        mb: "1rem",
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        justifyItems: "center",
        fontWeight: "bold",
      }}
    >
      <Stack direction={{ sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Stack
          direction="row"
          sx={{ display: "flex", alignItems: "center" }}
          spacing={2}
        >
          <Typography variant="body1">British Pizza | Medium</Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{ display: "flex", alignItems: "center" }}
          spacing={2}
          mx={3}
        >
          <IconButton aria-label="add" size="small">
            <AddRoundedIcon fontSize="small" />
          </IconButton>
          {/* keeping UI consistent by using the default HTML5 number input element */}
          <input
            type="number"
            style={{
              width: "2.5rem",
              textAlign: "center",
              height: "2rem",
            }}
          />
          <IconButton aria-label="minus" size="small">
            <RemoveRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifySelf: "flex-end",
          }}
          spacing={2}
        >
          <Typography variant="body1">$7.99</Typography>
          <IconButton aria-label="remove" size="small">
            <HighlightOffTwoToneIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartItem;
