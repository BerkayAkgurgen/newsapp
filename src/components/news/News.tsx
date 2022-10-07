import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import NewsList from "./NewsList";

const News = () => {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ mt: "120px", mx: matches ? 10 : 2 }}>
      <NewsList />
    </Box>
  );
};

export default News;
