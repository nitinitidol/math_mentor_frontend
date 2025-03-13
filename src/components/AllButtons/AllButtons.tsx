import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { colors } from "@mui/material";

// Primary Button
export const PrimaryButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#4F46E5",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    borderRadius: "8px",
    padding: "10px 16px",
    textTransform: "capitalize",
    // border: "1px solid #0C2340",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

  "@media (max-width: 480px)": {
    width: "100%",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: 500,
  },
  //   "&:hover": {
  //     backgroundColor: "#D12047",
  //   },
}));



// light Button
export const LightButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#F3F4F6",
    color: "#374151",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    borderRadius: "8px",
    padding: "10px 16px",
    textTransform: "capitalize",
    // border: "1px solid #0C2340",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

  "@media (max-width: 480px)": {
    width: "100%",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: 500,
  },
  //   "&:hover": {
  //     backgroundColor: "#D12047",
  //   },
}));


