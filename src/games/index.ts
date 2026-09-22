import type { GameConfig } from "../types/game.types";
import { COMETA_CONFIG } from "./cometaConfig";
import { DEMO_CONFIG } from "./demoConfig";
import { IDOMED_CONFIG } from "./idomedConfig";

const games = [IDOMED_CONFIG, DEMO_CONFIG, COMETA_CONFIG]

export const getGameBySlug = (slug: string | undefined): GameConfig | undefined => {
    return games.find(game => game.slug === slug)
}