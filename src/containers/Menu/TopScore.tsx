import Api from "../../api/api"

export const TopScore = async (player: string): Promise<number> => {
    try {
        let prev_score = await Api.getScoreByUser(player) ?? 0;
        const playerScore = prev_score.find(n => n.player === player);
        console.log(playerScore.score)    
        return playerScore.score
    } catch (e) {
        return 0
    }
}