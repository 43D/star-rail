import { RankChar, RankLC } from "../../infra/api/iStarRailApi";

export const getRankImg = (rank: RankChar | RankLC) => rank === 4 ?
    "https://static.wikia.nocookie.net/houkai-star-rail/images/7/77/Icon_4_Stars.png/" :
    rank === 5 ? "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2b/Icon_5_Stars.png" :
        "https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Icon_3_Stars.png/";