import React from "react";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled, useTheme } from "@mui/material/styles";
import { FaSearch } from "react-icons/fa";

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),

  [theme.breakpoints.up("md")]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

function Search() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButton onClick={handleOpen}>
          <FaSearch />
        </IconButton>

        <Slide direction="left" in={open}>
          <StyledSearchbar>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="end">
                  <FaSearch />
                </InputAdornment>
              }
              sx={{
                border: "2px solid black",
                backgroundColor: "white",
                [theme.breakpoints.up("md")]: {
                  marginBottom: "55px",
                  width: "70vh",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            />
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}

export default Search;

