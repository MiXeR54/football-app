import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export const LeagueCard = ({ league }) => {
  const CustomLink = React.forwardRef((props, ref) => (
    <RouterLink
      ref={ref}
      to={`/competition/${league.id}`}
      {...props}
      style={{ textDecoration: "none" }}
    />
  ));

  return (
    <Grid item key={league.id} xs={12} component={CustomLink}>
      <Paper elevation={3}>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="space-around"
        >
          <Grid item xs={3}>
            <Typography>{league.area.name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{league.name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {new Date(league.currentSeason.startDate).toDateString()} /{" "}
              {new Date(league.currentSeason.endDate).toDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
