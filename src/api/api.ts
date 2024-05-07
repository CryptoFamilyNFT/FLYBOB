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
        return "https://bobdb.vercel.app/api";
      case 1:
        return "https://bobdb.onrender.com/api";
      default:
        return "https://bobdb.onrender.com/api";
    }
  }

  public static BASE_URL = 'https://bobdb.onrender.com/api';

  public static async getScores(): Promise<Score[]> {
    try {
      const response = await fetch(`${Api.getBASE_URL(1)}/scores`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Imposta l'header CORS

        }
      });
      const data = await response.json();
      console.log("response", data);
      return data;
    } catch (error) {
      console.error('Error fetching scores:', error);
      throw error;
    }
  }

  public static async getPlayer(): Promise<Score[]> {
    try {
      const response = await fetch(`${Api.getBASE_URL(1)}/players`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching scores:', error);
      throw error;
    }
  }

  public static async getScoreByUser(player: string): Promise<any[]> {
    try {
      const response = await fetch(`${Api.getBASE_URL(1)}/scores/${player}`);
      const data = await response.json();
      console.log(data)
      return data
    } catch (error) {
      console.error(`Error fetching score for user ${player}:`, error);
      throw error;
    }
  }

  public static async getGameInfo(account: string): Promise<any> {
    try {
      console.log(`Making API request for game info for account ${account}`);
      const response = await fetch(`${Api.getBASE_URL(1)}/scores/${account}`);
      const data = await response.json();
      console.log('API Response:', data);
  
      // Estrai direttamente il campo gameInfo dalla risposta.
      const gameInfoData = data.map((item: any) => item.gameInfo);
  
      return gameInfoData;
    } catch (error) {
      console.error(`Error fetching game info for account ${account}:`, error);
    }
  }
  

  // Modifica la chiamata ad axios.post nel tuo frontend
  public static async addGameInfo(player: string, score: string, gameInfo: GameInfo): Promise<void> {
    try {
      console.log("gameInfo", gameInfo, "score", score, "player", player);

      const response = await fetch(
        `${Api.getBASE_URL(1)}/scores`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Assicurati che l'header Content-Type sia correttamente impostato
          },
          body: JSON.stringify({
            player,
            score,
            gameInfo
          })
        }
      );

      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error adding game info:', error);
    }
  }



  public static async updateGameInfo(player: string, updatedGameInfo: Partial<GameInfo>): Promise<void> {
    try {
      await fetch(`https://bobdb.onrender.com/api/scores/${player}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gameInfo: updatedGameInfo as Partial<GameInfo> })
      });
    } catch (error) {
      console.error(`Error updating game info for user ${player}:`, error);
      throw error;
    }
  }



  public static async addScore(player: string, score: string): Promise<void> {
    try {
      const response = await fetch(`${Api.getBASE_URL(1)}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ player, score })
      });
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error adding score:', error);
      throw error;
    }
  }

  public static async resetScoreAll(): Promise<void> {
    try {
      const response = await fetch(`${Api.getBASE_URL(1)}/scores/reset`, {
        method: 'POST'
      });
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error resetting scores:', error);
      throw error;
    }
  }

  public static async findPlayer(player: string): Promise<Score> {
    try {
      const response = await fetch(`${Api.getBASE_URL(1)}/scores/${player}`);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(`Error fetching scores for player ${player}:`, error);
      throw error;
    }
  }

  public static async updatePlayer(player: string, newScore: string): Promise<void> {
    try {
      const response = await fetch(`${Api.getBASE_URL(1)}/scores/${player}/${newScore}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log("[ii] — RESPONSE:", data);
      console.log(data)
    } catch (error) {
      console.error('Error updating player:', error);
      throw error;
    }
  }
}
