import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useGames } from "./api/game";

export const Games: React.FC = () => {
  const { data: games = [] } = useGames();
  return (
    <Paper
      elevation={2}
      sx={{ display: "flex", flexDirection: "column", p: 2 }}
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        games
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game) => (
            <TableRow key={game.id}>
              <TableCell>{game.startDate}</TableCell>
              <TableCell>{game.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
