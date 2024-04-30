"use client";

import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
