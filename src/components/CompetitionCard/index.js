import { Grid, Paper, Typography, Box, Divider } from "@material-ui/core";
import React from "react";

export const CompetitionCard = ({ competition }) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <Box p={2}>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="flex-start"
              alignContent="center"
            >
              <Grid item container direction="column" spacing={2} xs={9} md={8}>
                <Grid item>
                  <Typography>Ближайшее событие</Typography>
                </Grid>
                <Divider />
                <Grid item>
                  <Typography>{competition.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Страна: {competition.area.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Начало:{" "}
                    {new Date(
                      competition.currentSeason.startDate
                    ).toDateString()}
                  </Typography>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography>
                    Конец:{" "}
                    {new Date(competition.currentSeason.endDate).toDateString()}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Матчей: {competition.currentSeason.currentMatchday}
                  </Typography>
                </Grid>
              </Grid>
              {competition.emblemUrl && (
                <Grid item xs={2}>
                  <img src={competition.emblemUrl} height="50px" alt=""></img>
                </Grid>
              )}
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <Box p={2}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Typography>Предыдущие сезоны</Typography>
              </Grid>
              <Divider />
              {competition.seasons.map((el) => {
                return (
                  <Grid key={el.id} item container xs={12} direction="column">
                    <Grid item>
                      <Typography>
                        Даты: {el.startDate} - {el.endDate}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Победитель: {el?.winner?.name || "нет информации"}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Матчей: {el.currentMatchday || "нет информации"}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
