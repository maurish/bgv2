import type { Game } from "../../../common/types/Game";
import { getClient } from "../db";

export const getGames = async (): Promise<Game[]> => {
  const response = await getClient(async (client) =>
    client.query("SELECT * FROM games")
  );
  return response.rows.map(gameMapper);
};

const gameMapper = (row: any): Game => ({
  id: row.id,
  endDate: row.endDate,
  startDate: row.startDate,
});
