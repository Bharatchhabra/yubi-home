import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CommoditiesCard(props) {
  return (
    <Card
      style={{
        backgroundImage: `url(${props.photoicon})`,
        height: "350px",
        borderRadius: "0",
        backgroundSize: "cover",
      }}
    >
      <CardContent>
        <Typography className="about_headingtext">
          {props.commoditiestext}
        </Typography>
      </CardContent>
    </Card>
  );
}
