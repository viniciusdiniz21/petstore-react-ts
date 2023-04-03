import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../types/global.types";
import moment from "moment";
import ModalEdit from "../modal-edit/ModalEdit";
import ModalDelete from "../modal-delete/ModalDelete";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <Box sx={{ minWidth: 160 }}>
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
            <ModalEdit data={product} />
            <ModalDelete data={product} />
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
