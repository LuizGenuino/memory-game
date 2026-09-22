import type { GameConfig } from "../types/game.types";
import { IDOMED_CONFIG } from "./idomedConfig";

const games = [IDOMED_CONFIG]

export const getGameBySlug = (slug: string | undefined): GameConfig | undefined => {
    return games.find(game => game.slug === slug)
}