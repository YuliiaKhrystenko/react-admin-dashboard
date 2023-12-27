import React, { useState } from "react"
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  Settings,
  ArrowDropDownOutlined,
} from "@mui/icons-material"
import FlexBetween from "components/FlexBetween"
import { useDispatch } from "react-redux"
import { setMode } from "state"
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material"

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="0.5rem"
            p="0.1rem 1rem"
          >
            <IconButton>
              <Search />
            </IconButton>
            <InputBase
              sx={{
                width: "100%",
                "& .MuiInputBase-input": {
                  padding: theme.spacing(1, 1, 1, 0),
                  // vertical padding + font size from searchIcon
                  transition: theme.transitions.create("width"),
                  [theme.breakpoints.up("sm")]: {
                    width: "12ch",
                    "&:focus": {
                      width: "20ch",
                    },
                  },
                },
              }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <Settings sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
