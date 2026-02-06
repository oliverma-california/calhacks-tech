export type Deck = {
  id: string;
  name: string;
  cards: string[];
  createdAt: number;
};

const KEY = "cr_decks";

export function loadDecks(): Deck[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveDecks(decks: Deck[]) {
  localStorage.setItem(KEY, JSON.stringify(decks));
}