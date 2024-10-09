export interface GameInfoSchema {
  alberta_engine_prefix: string;
  starting_game: string;
  games: string[];
  alberta_engine_assets?: {
    alberta_sprites?: {
      [k: string]: string;
    };
    alberta_sounds?: {
      [k: string]: string;
    };
    alberta_music?: {
      [k: string]: string;
    };
    [k: string]: unknown;
  };
  games_meta?: {
    calgary?: {
      favicon?: string;
      rich_name?: string;
      menu_hidden?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
