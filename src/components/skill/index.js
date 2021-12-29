import React from "react";
import { Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SvgIcon from "@mui/material/SvgIcon";
export default function index(props) {
  return (
    <div className="skillset-wrapper">
      <Card
        variant="outlined"
        sx={{
          height: 120,
          width: 150,
          marginRight: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i class="devicon-cplusplus-line-wordmark" style={{ fontSize: 70 }}></i>
      </Card>
      <Card
        variant="outlined"
        sx={{ height: 120, width: 150, marginRight: 5 }}
      ></Card>
      <Card
        variant="outlined"
        sx={{ height: 120, width: 150, marginRight: 5 }}
      ></Card>
      <Card
        variant="outlined"
        sx={{ height: 120, width: 150, marginRight: 5 }}
      ></Card>
      <Card
        variant="outlined"
        sx={{ height: 120, width: 150, marginRight: 5 }}
      ></Card>
      <Card
        variant="outlined"
        sx={{ height: 120, width: 150, marginRight: 5 }}
      ></Card>
      <Card
        variant="outlined"
        sx={{ height: 120, width: 150, marginRight: 5 }}
      ></Card>
    </div>
  );
}
