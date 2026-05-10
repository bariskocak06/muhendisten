import { AuroraProfile, AURORA_MASTER_NUMBERS } from './types';

const LETTER_VALUES: Record<string, number> = {
  a: 1, j: 1, s: 1, ş: 1,
  b: 2, k: 2, t: 2,
  c: 3, ç: 3, l: 3, u: 3, ü: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, ö: 6, x: 6,
  g: 7, ğ: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, ı: 9, r: 9,
};

const VOWELS = ['a', 'e', 'i', 'ı', 'o', 'ö', 'u', 'ü'];

const reduceNumber = (num: number, allowMaster: boolean = true): number => {
  if (num === 0) return 0;
  if (allowMaster && AURORA_MASTER_NUMBERS.includes(num)) return num;

  let sum = num;
  while (sum > 9 && (!allowMaster || !AURORA_MASTER_NUMBERS.includes(sum))) {
    sum = sum.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
  }
  return sum;
};

const calculateStringSum = (str: string): number => {
  return str
    .toLocaleLowerCase('tr-TR')
    .split('')
    .reduce((acc, char) => acc + (LETTER_VALUES[char] || 0), 0);
};

const findAuroraMirror = (num: number): number | undefined => {
  if (num <= 9) return undefined;
  let current = num;
  for (let i = 0; i < 20; i++) {
    current = current - 9;
    if (AURORA_MASTER_NUMBERS.includes(current)) return current;
    if (current <= 9) return undefined;
  }
  return undefined;
};

export const calculateAuroraProfile = (
  firstName: string,
  lastName: string,
  birthDate: string
): AuroraProfile => {
  const [year, month, day] = birthDate.split('-').map(Number);

  const daySum = reduceNumber(day, true);
  const monthSum = reduceNumber(month, true);
  const yearSum = reduceNumber(year, true);

  const rawLifePath = daySum + monthSum + yearSum;
  const lifePathNumber = reduceNumber(rawLifePath, true);

  const cleanName = firstName.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ]/g, '');
  const cleanSurname = lastName.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ]/g, '');
  const fullName = cleanName + cleanSurname;

  const nameSum = calculateStringSum(cleanName);
  const surnameSum = calculateStringSum(cleanSurname);

  const nameNumber = reduceNumber(nameSum, true);
  const surnameNumber = reduceNumber(surnameSum, true);

  const fullNameNumber = reduceNumber(nameNumber + surnameNumber, true);

  const vowels = fullName.toLocaleLowerCase('tr-TR').split('').filter(c => VOWELS.includes(c));
  const consonants = fullName.toLocaleLowerCase('tr-TR').split('').filter(c => !VOWELS.includes(c) && LETTER_VALUES[c]);

  const soulSum = vowels.reduce((acc, c) => acc + (LETTER_VALUES[c] || 0), 0);
  const personalitySum = consonants.reduce((acc, c) => acc + (LETTER_VALUES[c] || 0), 0);

  const soulNumber = reduceNumber(soulSum, true);
  const personalityNumber = reduceNumber(personalitySum, true);

  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  const tally = (n: number) => {
    if (n > 9) {
      const base = reduceNumber(n, false);
      if (counts[base] !== undefined) counts[base]++;
    } else if (n > 0) {
      counts[n]++;
    }
  };

  fullName.toLocaleLowerCase('tr-TR').split('').forEach(char => {
    const val = LETTER_VALUES[char];
    if (val) tally(val);
  });

  const dateStr = `${day}${month}${year}`;
  dateStr.split('').forEach(d => tally(parseInt(d)));

  const missingNumbers = Object.entries(counts)
    .filter(([, count]) => count === 0)
    .map(([num]) => parseInt(num));

  const excessNumbers = Object.entries(counts)
    .filter(([, count]) => count >= 4)
    .map(([num]) => parseInt(num));

  const fire = counts[1] + counts[3] + (counts[8] * 0.5);
  const water = counts[2] + counts[6] + (counts[9] * 0.5);
  const air = counts[5];
  const earth = counts[4] + (counts[8] * 0.5);
  const soul = counts[7] + (counts[9] * 0.5);

  const total = fire + water + air + earth + soul || 1;

  const auroraMirror = findAuroraMirror(nameSum + surnameSum);

  return {
    lifePathNumber,
    nameNumber,
    surnameNumber,
    fullNameNumber,
    soulNumber,
    personalityNumber,
    missingNumbers,
    excessNumbers,
    chakras: counts,
    balance: {
      fire: Math.round((fire / total) * 100),
      water: Math.round((water / total) * 100),
      air: Math.round((air / total) * 100),
      earth: Math.round((earth / total) * 100),
      soul: Math.round((soul / total) * 100),
    },
    pinnacles: [],
    auroraMirror,
  };
};
