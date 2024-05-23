// api.ts

import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://serverbob.onrender.com/api'; // Sostituisci con l'URL del tuo server Express

interface Player {
  name: string;
}

interface Score {
  playerName: string;
  value: number;
}

class ApiConnector {
  public static async getPlayers(): Promise<AxiosResponse<Player[]>> {
    try {
      const response = await axios.get(`${API_URL}/players`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  public static async addPlayer(player: Player): Promise<AxiosResponse<Player>> {
    try {
      const response = await axios.post(`${API_URL}/players`, player);
      return response;
    } catch (error) {
      throw error;
    }
  }

  public static async getScores(): Promise<AxiosResponse<Score[]>> {
    try {
      const response = await axios.get(`${API_URL}/scores/`, {
        headers: {
          'Access-Control-Allow-Origin': '*' // Imposta l'header CORS
        }
      });
      return response;
    } catch (error) {
      throw error;
    }
  }


  public static async addScore(score: Score): Promise<AxiosResponse<Score>> {
    try {
      const response = await axios.post(`${API_URL}/scores`, score);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiConnector;
