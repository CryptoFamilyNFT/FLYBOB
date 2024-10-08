import axios from 'axios';

export interface Score {
  player: string;
  score: string;
}

export interface GameInfo {
  userId: string;
  nftCount: number;
  lives: number;
  lastResetTime: number;
}

export default class Api {
  static getBASE_URL(opt: number): string {
    switch (opt) {
      case 0:
        return "https://serverbob.onrender.com/api";
      case 1:
        return "https://serverbob.onrender.com/api";
      default:
        return "https://serverbob.onrender.com/api";
    }
  }

  public static BASE_URL = 'https://serverbob.onrender.com/api';

  public static async getScores(): Promise<Score[]> {
    try {
      console.log("Requesting scores from API");
      const response = await axios.get(`${Api.getBASE_URL(1)}/scores`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching scores:', error);
      throw error;
    }
  }

  public static async getPlayer(): Promise<Score[]> {
    try {
      const response = await axios.get(`${Api.getBASE_URL(1)}/players`);
      return response.data;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  }

  public static async getScoreByUser(player: string): Promise<any[]> {
    try {
      const response = await axios.get(`${Api.getBASE_URL(1)}/scores/${player}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching score for user ${player}:`, error);
      throw error;
    }
  }

  public static async getGameInfo(account: string): Promise<any> {
    try {
      console.log(`Making API request for game info for account ${account}`);
      const response = await axios.get(`${Api.getBASE_URL(1)}/scores/${account}`);
      console.log('API Response:', response.data);
      const gameInfoData = response.data.map((item: any) => item.gameInfo);
      return gameInfoData;
    } catch (error) {
      console.error(`Error fetching game info for account ${account}:`, error);
    }
  }

  public static async addGameInfo(player: string, score: string, gameInfo: GameInfo): Promise<void> {
    try {
      console.log("gameInfo", gameInfo, "score", score, "player", player);
      const response = await axios.post(
        `${Api.getBASE_URL(1)}/scores`,
        { player, score, gameInfo },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error adding game info:', error);
    }
  }

  public static async updateGameInfo(player: string, updatedGameInfo: Partial<GameInfo>): Promise<void> {
    try {
      await axios.put(`https://serverbob.onrender.com/api/scores/${player}`, {
        gameInfo: updatedGameInfo as Partial<GameInfo>
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error(`Error updating game info for user ${player}:`, error);
      throw error;
    }
  }

  public static async addScore(player: string, score: string): Promise<void> {
    try {
      const response = await axios.post(`${Api.getBASE_URL(1)}/scores`, { player, score }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error adding score:', error);
      throw error;
    }
  }

  public static async resetScoreAll(): Promise<void> {
    try {
      const response = await axios.post(`${Api.getBASE_URL(1)}/scores/reset`);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error resetting scores:', error);
      throw error;
    }
  }

  public static async findPlayer(player: string): Promise<Score> {
    try {
      const response = await axios.get(`${Api.getBASE_URL(1)}/scores/${player}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching scores for player ${player}:`, error);
      throw error;
    }
  }

  public static async updatePlayer(player: string, newScore: string): Promise<void> {
    try {
      const response = await axios.put(
        `${Api.getBASE_URL(1)}/scores/${player}`, 
        { score: newScore }, // Body della richiesta
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("[ii] — RESPONSE:", response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error updating player:', error);
      throw error;
    }
  }
}
