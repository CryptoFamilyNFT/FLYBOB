// api.ts

import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:5000'; // Sostituisci con l'URL del tuo server Express

interface Player {
  name: string;
}

interface Score {
  playerName: string;
  value: number;
}

class ApiConnector {
  static async getPlayers(): Promise<AxiosResponse<Player[]>> {
    try {
      const response = await axios.get(`${API_URL}/players`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async addPlayer(player: Player): Promise<AxiosResponse<Player>> {
    try {
      const response = await axios.post(`${API_URL}/players`, player);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getScores(): Promise<AxiosResponse<Score[]>> {
    try {
      const response = await axios.get(`${API_URL}/scores`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async addScore(score: Score): Promise<AxiosResponse<Score>> {
    try {
      const response = await axios.post(`${API_URL}/scores`, score);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiConnector;
