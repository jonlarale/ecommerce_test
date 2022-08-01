import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ width: 200, cursor: "pointer" }}>
      <CardMedia
        component="img"
        alt="Item image"
        height="100"
        image={props.imgSrc}
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ height: 100 }}>
        <p style={{ fontSize: 10, fontWeight: 600 }}>{props.name}</p>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "1rem",
        }}
      >
        <span>{props.price}</span>
        <Button size="small">
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
