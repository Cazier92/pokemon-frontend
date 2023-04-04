/* ---------===== custom models ====--------- */
export interface Pokemon {
  name: string;
  nickname?: string;
  owner: { id: number };
  originalOwner: { id: number };
  level: number;
  types: [Type];
  pokedexNum: number;
  potentialMoves: [PotentialMove];
  moveSet: [Move];
  spriteFront: string;
  spriteBack: string;
  evolves: boolean;
  evolvesTo: [Evolution];
  totalHP: number;
  currentHP: number;
  attack: number;
  spAttack: number;
  defense: number;
  spDefense: number;
  speed: number;
  effortPointTotal: number;
  statusCondition?: string | null;
  captureRate: number;
  growthRate: string;
  levelBaseExp: number;
  currentExp: number;
  percentToNextLevel: number;
  nextLevelExp: number;
  baseExpYield: number;
  holdItem?: object;
}

export interface Type {
  slot: 1 | 2;
  name: string;
}

export interface PotentialMove {
  name: string;
  url: string;
  method: 'level-up' | 'egg' | 'machine' | 'tutor';
}

export interface Move {
  name: string;
  type: string;
  accuracy: number | null;
  effect: string;
  effectChance: number | null;
  damageClass: string;
  totalPP: number;
  currentPP: number;
  power: number | null;
  priority: number;
}

export interface Stat {
  name: string;
  baseStat: number;
  effort: number;
  iV: number;
  effortPoints: number;
}

export interface Evolution {
  name: string;
  trigger: string;
  minLevel?: number | null;
  item?: string | null;
  heldItem?: string | null;
}

/* Main Game Models: */


export interface Position {
    x: number;
    y: number;
  }
  
export interface Frames {
      max: number;
      hold: number;
      val: number;
      elapsed: number;
    }
    
export interface Sprites {
        up: HTMLImageElement;
        down: HTMLImageElement;
        left: HTMLImageElement;
        right: HTMLImageElement;
      }

      
export interface Sprite {
    position: Position;
    // velocity,
    image: HTMLImageElement;
    frames: Frames;
    sprites?: Sprites;
    animate: boolean;
    width: number;
    height: number;
    // draw: () => void;
    
  }

export interface Boundary {
  position: Position;
  width: 48;
  height: 48;
}



/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
