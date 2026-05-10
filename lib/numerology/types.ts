export enum EnergyType {
  FIRE = 'Ateş',
  WATER = 'Su',
  AIR = 'Hava',
  EARTH = 'Toprak',
  SOUL = 'Ruh',
}

export interface NumerologyInput {
  firstName: string;
  lastName: string;
  birthDate: string;
}

export interface AuroraProfile {
  lifePathNumber: number;
  nameNumber: number;
  surnameNumber: number;
  fullNameNumber: number;
  soulNumber: number;
  personalityNumber: number;
  missingNumbers: number[];
  excessNumbers: number[];
  chakras: Record<number, number>;
  balance: {
    fire: number;
    water: number;
    air: number;
    earth: number;
    soul: number;
  };
  pinnacles: number[];
  auroraMirror?: number;
}

export interface NumberMeaning {
  keywords: string[];
  element: EnergyType;
  chakra: string;
  archetype: string;
  light: string[];
  shadow: string[];
}

export const AURORA_MASTER_NUMBERS = [11, 22, 33, 44, 55, 66, 77, 88, 99];
