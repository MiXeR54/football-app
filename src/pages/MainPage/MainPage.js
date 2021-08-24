import { Container, Grid, Typography, Box } from "@material-ui/core";
import { LeagueCard } from "../../components/LeagueCard";
import { useDataStatus } from "../../hooks/useDataStatus";

export const MainPage = () => {
  const { data, error } = useDataStatus(
    "http://api.football-data.org/v2/competitions?area=2077&plan=TIER_ONE"
  );

  return (
    <Container>
      <Box my={2}>
        <Typography variant="h3">Список Соревнований</Typography>
      </Box>
      <Grid container spacing={4}>
        {data &&
          data.competitions.map((el) => {
            return <LeagueCard key={el.id} league={el} />;
          })}
        {error && error.msg}
      </Grid>
    </Container>
  );
};
