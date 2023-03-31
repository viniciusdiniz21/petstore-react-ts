import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../types/global.types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {moment(product.updatedAt).fromNow()}
            </Typography>
            <Typography variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {product.brand}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="warning" variant="contained">
              <EditIcon />
            </Button>
            <Button size="small" color="error" variant="contained">
              <DeleteIcon />
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
