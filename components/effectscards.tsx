import Image from "next/image";
import Link from "next/link";
import { ArrowBigRight, ChevronsDown } from "lucide-react";
import { text } from "stream/consumers";

export default function EffectsCards() {
  return (
    <div className="pt-24 w-full flex justify-center">
      <div className="flex-col">
        <div className="flex flex-col gap-24 items-center justify-center lg:justify-between max-w-6xl w-full p-5">
          <h1 className="text-4xl font-semibold">
            Effects
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full justify-center">
            {cards.map((card, idx) => (
                <div
                key={`effect-card-${idx}`}
                className="gap-6 rounded-lg p-6 bg-neutral-700 flex flex-col items-center justify-between h-full"
                >
                <div className="flex flex-col items-center gap-6">
                  <h2 className="text-2xl font-semibold text-white">
                  {card.title}
                  </h2>
                  <p className="text-neutral-400 text-center">{card.description}</p>
                </div>
                {card.image && (
                  <img
                  src={card.image}
                  alt={card.title}
                  className="w-2/3 rounded-xl aspect-square mb-6"
                  />
                )}
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const cards = [
  {
    title: "Knockback",
    description:
      "An effect that pushes units or structures away from the source of the effect upon impact.",
    image: "/knockback.png",
  },
  {
    title: "Taunting",
    description:
      "An effect that forces enemy units to target the taunting unit, diverting their attention from other units or structures.",
    image: "/taunting.png",
  },
  {
    title: "Spawning",
    description:
      "An effect that creates new units or structures on the battlefield, often used to overwhelm opponents or reinforce defenses.",
    image: "/spawning.png",
  },
  {
    title: "Respawn",
    description:
      "An effect that allows certain units to return to the battlefield after being defeated, often with a delay.",
    image: "/respawn.png",
  },
  {
    title: "Spawn Damage",
    description:
      "An effect that deals damage to enemy units or structures upon the spawning of a unit or structure.",
    image: "/spawndamage.png",
  },
  {
    title: "Death Damage",
    description:
      "An effect that deals damage to enemy units or structures when a unit is defeated.",
    image: "/deathdamage.png",
  },
  {
    title: "Lane Switch",
    description:
      "An effect that allows units to switch lanes on the battlefield, often used to surprise opponents or avoid threats.",
    image: "/laneswitch.png",
  },
  {
    title: "Cursing",
    description:
      "An effect that applies a negative status to enemy units, reducing their effectiveness or causing damage over time.",
    image: "/cursing.png",
  },
  {
    title: "Multi-Stage Ability",
    description:
      "An effect that triggers additional effects or actions after the initial effect is activated, often used to create complex interactions on the battlefield.",
    image: "/multistageability.png",
  },
  {
    title: "Boosting",
    description:
      "An effect that temporarily increases the stats or abilities of friendly units, enhancing their performance on the battlefield.",
    image: "/boosting.png",
  },
  {
    title: "Charging",
    description:
      "An effect that allows units to build up energy or power over time, often leading to a powerful attack or ability when fully charged.",
    image: "/charging.png",
  },
  {
    title: "Dashing",
    description:
      "An effect that allows units to quickly move a short distance, often used to dodge attacks or close the gap between units.",
    image: "/dashing.png",
  },
  {
    title: "Shield",
    description:
      "An effect that provides a protective barrier to units, absorbing damage and reducing harm from enemy attacks.",
    image: "/shield.png",
  },
  {
    title: "Inferno Beam",
    description:
      "An effect that emits a powerful beam of fire, dealing continuous damage to enemy units or structures in its path.",
    image: "/infernobeam.png",
  },
  {
    title: "Stun",
    description:
      "An effect that temporarily disables enemy units, preventing them from taking actions or moving.",
    image: "/stun.png",
  },
  {
    title: "Deflection",
    description:
      "An effect that allows units to deflect incoming attacks, reducing or negating damage from enemy projectiles or melee strikes.",
    image: "/deflect.png",
  },
  {
    title: "Poison",
    description:
      "An effect that applies a damaging status to enemy units, causing them to take damage over time and potentially reducing their effectiveness.",
    image: "/poison.png",
  },
  {
    title: "Immobilization",
    description:
      "An effect that temporarily prevents units from moving or taking actions, effectively immobilizing them on the battlefield.",
    image: "/immobilization.png",
  },
  {
    title: "Slowdown",
    description:
      "An effect that reduces the movement speed or action speed of enemy units, hindering their ability to respond quickly on the battlefield.",
    image: "/slowdown.png",
  },
  {
    title: "Invisibility",
    description:
      "An effect that allows units to become unseen by enemy units, often until they attack or take an action.",
    image: "/invisibility.png",
  },
  {
    title: "Healing",
    description:
      "An effect that restores health to units over time, helping them recover from damage sustained in battle.",
    image: "/healing.png",
  },
];