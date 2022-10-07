import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { truncateString } from "../../helper/helper";

interface ItemsProps {
  item: {
    source: {
      id: null | string | number;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
  };
}

function NewsListItems({ item }: ItemsProps) {
  const matches = useMediaQuery("(min-width:900px)");

  const navigateToNew = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <Grid
      item
      xs={4}
      sm={6}
      md={6}
      lg={4}
      xl={4}
      sx={{
        marginX: "auto",
      }}
      key={Math.random()}
    >
      <Card
        sx={{
          maxWidth: matches ? 345 : "100%",
          height: 340,
          marginX: "auto",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => navigateToNew(item.url)}
      >
        <CardMedia
          component="img"
          height="140"
          image={
            item.urlToImage
              ? item.urlToImage
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {truncateString(item.title, 40)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateString(item.description, 100)}
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "absolute", bottom: 1 }}>
          <Button size="small">{truncateString(item.author, 30)}</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default NewsListItems;
