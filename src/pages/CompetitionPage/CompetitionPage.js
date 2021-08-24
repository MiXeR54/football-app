import { Container, Typography, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CompetitionCard } from "../../components/CompetitionCard";
import { useDataStatus } from "../../hooks/useDataStatus";

export const CompetitionPage = () => {
  const { id } = useParams();

  const { data, error } = useDataStatus(
    `http://api.football-data.org/v2/competitions/${id}`
  );

  console.log(data);

  return (
    <Container>
      <Box my={2}>
        <Typography variant="h3">Подробности Соревнования</Typography>
      </Box>
      {error && error.msg}
      {data && <CompetitionCard competition={data} />}
    </Container>
  );
};
