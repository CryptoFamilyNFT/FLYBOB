import axios from 'axios';

interface Score {
  player: string;
  score: string;
}



export default class Api {

  static getBASE_URL(opt: number): string {
    switch (opt) {
      case 0:
        return "http://localhost:5000/api";
      case 1:
        return "https://bobdb.onrender.com/api";
      default:
        return "https://bobdb.onrender.com/api";
    }
  }

  public static BASE_URL = 'https://bobdb.onrender.com/api';

  public static async getScores(): Promise<Score[]> {
    try {
      const response = await axios.get(`${Api.getBASE_URL(1)}/scores`);
      console.log("response", response)
      await Promise.all([response])

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
      console.error('Error fetching scores:', error);
      throw error;
    }
  }

  public static async getScoreByUser(player: string): Promise<any[]> {
    try {
      const response = await axios.get(`${Api.getBASE_URL(1)}/scores/${player}`);
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(`Error fetching score for user ${player}:`, error);
      throw error;
    }
  }

  public static async addScore(player: string, score: string): Promise<void> {
    try {
      await axios.post(`${Api.getBASE_URL(1)}/scores`, { player, score });
    } catch (error) {
      console.error('Error adding score:', error);
      throw error;
    }
  }

  public static async findPlayer(player: string): Promise<Score[]> {
    try {
      const response = await axios.get(`${Api.getBASE_URL(1)}/scores/${player}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(`Error fetching scores for player ${player}:`, error);
      throw error;
    }
  }

  public static async updatePlayer(player: string, newScore: string): Promise<void> {
    try {
      await axios.put(`${Api.getBASE_URL(1)}/scores/${player}/${newScore}`);
    } catch (error) {
      console.error('Error updating player:', error);
      throw error;
    }
  }
}

