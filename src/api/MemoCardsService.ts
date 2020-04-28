import { TMemoCard } from "../types/types"

export const TEMP_MEMO_CARDS: TMemoCard[] = [
  {
    id: '1',
    title: 'Test1',
    description: 'Test1 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(),
  },
  {
    id: '2',
    title: 'Test2',
    description: 'Test2 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(),
  },
  {
    id: '3',
    title: 'Test3',
    description: 'Test3 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(),
  },
  {
    id: '4',
    title: 'Test4',
    description: 'Test4 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(),
  },
  {
    id: '55',
    title: 'Test5',
    description: 'Test5 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(),
  },
  {
    id: '66',
    title: 'Test6',
    description: 'Test6 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(),
  },
  {
    id: '77',
    title: 'Test7',
    description: 'Test7 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(),
  },
  {
    id: '5',
    title: 'Test3',
    description: 'Test3 description',
    badExample: 'var a = 1',
    goodExample: 'const a = 1',
    lastUsedDate: new Date(2020, 3, 26),
  },
  {
    id: '6',
    title: 'Test2',
    description: 'Test2 description',
    badExample: 'a.push(...b)',
    goodExample: '[...a, ...b]',
    lastUsedDate: new Date(2020, 3, 27)
  }
]

export default class MemoCardsService {
  load = async (): Promise<TMemoCard[]> => {
    return Promise.resolve(TEMP_MEMO_CARDS);
  }
}