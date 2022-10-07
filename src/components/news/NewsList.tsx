import { Box, Grid, LinearProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import NewsListItems from "./NewsListItems";
import * as ROUTES from "../../configs/RouterConfig";

function NewsList() {
  const auth = useSelector((state: RootState) => state.loginReducer.login);
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${auth.accessToken}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status !== "error") {
          setNewsList(result.articles);
          console.log(22);
        } else {
          setNewsList([]);
          navigate(ROUTES.LOGIN);
          alert("Wrong access token.")
        }
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      {loading ? (
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
          }}
          spacing={2}
        >
          <Box component={"h1"} sx={{ color: "#fdbc11", textAlign: "center" }}>
            Loading...
          </Box>
          <LinearProgress
            color={"warning"}
            sx={{ background: "#fdbc11", color: "#fdbc11" }}
          />
        </Stack>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 14 }}
        >
          {newsList?.map((item, index) => (
            <NewsListItems item={item} key={index} />
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default NewsList;
