import { MedicineData } from "../types/forms";

const revive: MedicineData = {
  name: 'Revive',
  affects: ['currentHP'],
  value: 0,
  revive: true,
  reviveHP: 0.5,
  ether: false,
  description: "Revives a fainted pokémon, restoring half of it's HP.",
  cost: 500
}

const maxRevive: MedicineData = {
  name: 'Max Revive',
  affects: ['currentHP'],
  value: 0,
  revive: true,
  reviveHP: 1,
  ether: false,
  description: "Revives a fainted pokémon, restoring all of it's HP.",
  cost: 1500
}

const potion: MedicineData = {
  name: 'Potion',
  affects: ['currentHP'],
  value: 20,
  revive: false,
  ether: false,
  description: "Restores 20 HP to a pokémon's health.",
  cost: 100
}

const superPotion: MedicineData = {
  name: 'Super Potion',
  affects: ['currentHP'],
  value: 50,
  revive: false,
  ether: false,
  description: "Restores 50 HP to a pokémon's health.",
  cost: 200
}

const hyperPotion: MedicineData = {
  name: 'Hyper Potion',
  affects: ['currentHP'],
  value: 120,
  revive: false,
  ether: false,
  description: "Restores 120 HP to a pokémon's health.",
  cost: 300
}

const maxPotion: MedicineData = {
  name: 'Max Potion',
  affects: ['currentHP'],
  value: 750,
  revive: false,
  ether: false,
  description: "Fully restores a pokémon's health.",
  cost: 800
}

const fullRestore: MedicineData = {
  name: 'Full Restore',
  affects: ['currentHP', 'status'],
  value: 750,
  condition: 'all',
  revive: false,
  ether: false,
  description: "Fully restores a pokémon's health, and cures any status conditions.",
  cost: 1200
}

const maxHeal: MedicineData = {
  name: 'Max Heal',
  affects: ['status'],
  value: 0,
  condition: 'all',
  revive: false,
  ether: false,
  description: "Cures all status conditions of a pokémon.",
  cost: 800
}

const paralyzeHeal: MedicineData = {
  name: 'Paralyze Heal',
  affects: ['status'],
  value: 0,
  condition: 'paralyze',
  revive: false,
  ether: false,
  description: "Cures paralysis.",
  cost: 200
}

const sleepHeal: MedicineData = {
  name: 'Sleep Heal',
  affects: ['status'],
  value: 0,
  condition: 'sleep',
  revive: false,
  ether: false,
  description: "Awakens a sleeping pokémon.",
  cost: 200
}

const freezeHeal: MedicineData = {
  name: 'Freeze Heal',
  affects: ['status'],
  value: 0,
  condition: 'freeze',
  revive: false,
  ether: false,
  description: "Cures a frozen pokémon.",
  cost: 200
}

const confuseHeal: MedicineData = {
  name: 'Confuse Heal',
  affects: ['status'],
  value: 0,
  condition: 'confuse',
  revive: false,
  ether: false,
  description: "Cures a confused pokémon.",
  cost: 200
}

const burnHeal: MedicineData = {
  name: 'Burn Heal',
  affects: ['status'],
  value: 0,
  condition: 'burn',
  revive: false,
  ether: false,
  description: "Cures a burned pokémon.",
  cost: 200
}

const poisonHeal: MedicineData = {
  name: 'Poison Heal',
  affects: ['status'],
  value: 0,
  condition: 'poison',
  revive: false,
  ether: false,
  description: "Cures a poisoned pokémon.",
  cost: 200
}

const ether: MedicineData = {
  name: 'Ether',
  affects: ['currentPP'],
  value: 5,
  revive: false,
  ether: true,
  description: "Restores up to 5 PP to a selected move of a Pokémon.",
  cost: 500
}

export {
  revive,
  maxRevive,
  potion,
  superPotion,
  hyperPotion,
  maxPotion,
  fullRestore,
  ether,
}