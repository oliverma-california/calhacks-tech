"use client";

import { useEffect, useState } from "react";
import { CARDS } from "@/data/cards";
import { Deck, loadDecks, saveDecks } from "@/lib/decks";
import { v4 as uuidv4 } from "uuid";

import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";

export default function DeckBuilderPage() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  const [selected, setSelected] = useState<string[]>([]);
  const [decks, setDecks] = useState<Deck[]>([]);
  const [deckName, setDeckName] = useState("");

  useEffect(() => {
    setDecks(loadDecks());
  }, []);

  function toggleCard(id: string) {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((c) => c !== id);
      }

      if (prev.length >= 8) return prev;

      return [...prev, id];
    });
  }

  function saveDeck() {
    if (selected.length !== 8) {
      alert("Select exactly 8 cards");
      return;
    }

    if (!deckName.trim()) {
      alert("Enter a deck name");
      return;
    }

    const newDeck: Deck = {
      id: uuidv4(),
      name: deckName,
      cards: selected,
      createdAt: Date.now(),
    };

    const updated = [...decks, newDeck];

    setDecks(updated);
    saveDecks(updated);

    setSelected([]);
    setDeckName("");
  }

  function deleteDeck(id: string) {
    const updated = decks.filter((d) => d.id !== id);

    setDecks(updated);
    saveDecks(updated);
  }

  return (
    <div className="pt-24 w-full">
      <div className="fixed top-0 w-full">
        <Navbar
          setSideNavIsOpen={setSideNavIsOpen}
          sideNavIsOpen={sideNavIsOpen}
        />
        {sideNavIsOpen && <SideNav />}
      </div>
      <div className="min-h-screen p-6">

        <div className="mx-auto max-w-6xl space-y-24">
          <h1 className="text-4xl font-semibold text-center">
            Clash Royale Deck Builder
          </h1>
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2 bg-neutral-800 p-4 rounded-lg">
              <h2 className="mb-3 text-xl font-normal">
                Pick Cards ({selected.length}/8)
              </h2>
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
                {CARDS.map((card) => {
                  const active = selected.includes(card.id);

                  return (
                    <button
                      key={card.id}
                      onClick={() => toggleCard(card.id)}
                      className={`
                        rounded-lg p-1 transition
                        hover:scale-105
                        ${
                          active
                            ? "bg-neutral-400"
                            : "bg-neutral-600"
                        }
                      `}
                    >
                      <img
                        src={card.image}
                        alt={card.name}
                        className="aspect-square w-full object-contain"
                      />
                      <p className="mt-1 text-xs text-center">
                        {card.name}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
            <section className="space-y-4 bg-neutral-800 p-4 rounded-lg">
              <h2 className="text-xl font-normal">
                Current Deck
              </h2>
              <div className="grid grid-cols-4 gap-2 rounded-xl bg-neutral-700 p-3">
                {selected.map((id) => {
                  const card = CARDS.find((c) => c.id === id);

                  if (!card) return null;

                  return (
                    <img
                      key={id}
                      src={card.image}
                      className="rounded aspect-460/567"
                    />
                  );
                })}
                {Array.from({ length: 8 - selected.length }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className="flex aspect-460/567 items-center justify-center rounded border border-dashed text-neutral-400"
                    >
                      +
                    </div>
                  )
                )}
              </div>
              <input
                value={deckName}
                onChange={(e) => setDeckName(e.target.value)}
                placeholder="Deck name..."
                className="w-full rounded-lg border border-neutral-500 p-2"
              />
              <button
                onClick={saveDeck}
                disabled={selected.length !== 8}
                className="
                  w-full rounded-lg bg-blue-400/90 py-2
                  font-semibold text-white
                  hover:bg-blue-400/80 disabled:opacity-50
                "
              >
                Save Deck
              </button>
            </section>
          </div>
          <section>
            <h2 className="mb-4 text-2xl font-normal">
              Your Decks
            </h2>
            {decks.length === 0 && (
              <p className="text-gray-500">
                No decks saved yet.
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {decks.map((deck) => (
                <div
                  key={deck.id}
                  className="rounded-xl bg-neutral-700 p-4 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-normal">
                      {deck.name}
                    </h3>
                    <button
                      onClick={() => deleteDeck(deck.id)}
                      className="text-sm text-red-500 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-1">
                    {deck.cards.map((id) => {
                      const card = CARDS.find(
                        (c) => c.id === id
                      );

                      if (!card) return null;

                      return (
                        <img
                          key={id}
                          src={card.image}
                          className="rounded"
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
      <div className="pt-24 pb-12 text-sm font-light text-neutral-500 w-full text-center">Made w/ ❤️ by Oliver Ma<br /></div>
    </div>
  );
}