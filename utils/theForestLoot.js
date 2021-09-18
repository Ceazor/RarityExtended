/******************************************************************************
**	@Author:				Rarity Extended
**	@Twitter:				@RXtended
**	@Date:					Friday September 17th 2021
**	@Filename:				theForestLoot.js
******************************************************************************/

const	THE_FOREST_LOOT = {
	'Dead King crown': {
		name: 'Dead King crown',
		description: 'Once was a king, his name was lost but not his crown.',
		img: '/items/dead_king_crown.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'diplomacy',
			id: 8,
			change: 1
		}]
	},
	'Black gauntlet': {
		name: 'Black gauntlet',
		description: 'A mysterious gauntlet, with mysterious power.',
		img: '/items/black_gauntlet.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Sleight of Hand',
			id: 28,
			change: 2
		}]
	},
	'Haunted ring': {
		name: 'Haunted ring',
		description: 'Tells the story, that belonged to a witch...',
		img: '/items/haunted_ring.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			id: 19,
			change: 1
		}, {
			type: 'skill',
			name: 'Use Magic Device',
			id: 35,
			change: 1
		}]
	},
	'Ancient book': {
		name: 'Ancient book',
		description: 'The forest has a lot of stories, not as many as this book.',
		img: '/items/ancient_book.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			variant: 'Nature',
			id: 19,
			change: 1
		}]
	},
	'Enchanted book': {
		name: 'Enchanted book',
		description: "I wouldn't take it if I was you ...",
		img: '/items/enchanted_book.png',
		isCursed: true,
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Spellcraft',
			id: 30,
			change: 2
		}, {
			type: 'skill',
			name: 'Concentration',
			id: 5,
			change: -1
		}]
	},
	'Gold ring': {
		name: 'Gold ring',
		description: "Crafted by nobody, 'belongs to whoever finds it' is engraved on the ring...",
		img: '/items/gold_ring.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Escape Artist',
			id: 11,
			change: 1
		}]
	},
	'Treasure map': {
		name: 'Treasure map',
		description: 'Where does it lead? to the rarest destiny.',
		img: '/items/treasure_map.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			variant: 'Geography',
			id: 19,
			change: 1
		}]
	},
	'Spell book': {
		name: 'Spell book',
		description: 'Beware! can cast a spell on you.',
		img: '/items/spell_book.png',
		isCursed: true,
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Concentration',
			id: 5,
			change: 2
		}, {
			type: 'skill',
			name: 'Spellcraft',
			id: 30,
			change: -1
		}]
	},
	'Magic necklace': {
		name: 'Magic necklace',
		description: 'An unprecedented magic, anyway it looks cool.',
		img: '/items/magic_necklace.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Bluff',
			id: 3,
			change: 1
		}]
	},
	'Mechanical hand': {
		name: 'Mechanical hand',
		description: 'Solid and rigid, but precise and delicate.',
		img: '/items/mechanical_hand.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Open Lock',
			id: 22,
			change: 1
		}, {
			type: 'skill',
			name: 'Open Lock',
			id: 9,
			change: 1
		}]
	},
	'War helmet': {
		name: 'War helmet',
		description: 'Survived the battle, not as its former carrier.',
		img: '/items/war_helmet.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Sense Motive',
			id: 27,
			change: 1
		}, {
			type: 'skill',
			name: 'Listen',
			id: 20,
			change: 1
		}]
	},
	'Fire boots': {
		name: 'Fire boots',
		description: 'The God of Fire created these. Only a cold soul could carry them.',
		img: '/items/PIXEL_fire_boots.png',
		level: 'Epic',
		levelClassName: 'bg-items-epic',
		modifier: [{
			type: 'attributee',
			name: 'strength',
			id: 1,
			change: 1
		}]
	},
	'War trophy': {
		name: 'War trophy',
		description: 'A war where too much was lost.',
		img: '/items/war_trophy.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			variant: 'History',
			id: 19,
			change: 1
		}]
	},
	'Elf skull': {
		name: 'Elf skull',
		description: 'The anatomy of an elf, the trophy of his assassin.',
		img: '/items/elf_skull.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			variant: 'Nature',
			id: 19,
			change: 1
		}, {
			type: 'skill',
			name: 'Balance',
			id: 2,
			change: 1
		}]
	},
	'Unknown ring': {
		name: 'Unknown ring',
		description: 'A mystery created in the hardest metal.',
		img: '/items/aaaaaa.png',
		level: 'Epic',
		levelClassName: 'bg-items-epic',
		modifier: [{
			type: 'attribute',
			name: 'constitution',
			id: 3,
			change: 1
		}]
	},
	'Silver ring': {
		name: 'Silver ring',
		description: 'Bright at first, dark in oblivion.',
		img: '/items/silver_ring.png',
		isCursed: true,
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Spot',
			id: 31,
			change: 2
		}, {
			type: 'skill',
			name: 'Hide',
			id: 16,
			change: -1
		}]
	},
	'War book': {
		name: 'War book',
		description: 'How to start a war, how to bury your soldier friends...',
		img: '/items/war_book.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			variant: 'Nobility and Royalty',
			id: 19,
			change: 1
		}]
	},
	'Gold pot': {
		name: 'Gold pot',
		description: 'The temptation to put coin inside is hard to resist',
		img: '/items/gold_pot.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Perform',
			id: 23,
			change: 2
		}]
	},
	'Demon head': {
		name: 'Demon head',
		description: 'Shadowy figure, now headless.',
		img: '/items/demon_head.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			variant: 'The Planes',
			id: 19,
			change: 2
		}]
	},
	'Unknown key': {
		name: 'Unknown key',
		description: "Whatever this may open, it's a complete mystery.",
		img: '/items/unknown_key.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Open Lock',
			id: 22,
			change: 1
		}]
	},
	'Cursed book': {
		name: 'Cursed book',
		description: 'An ancient enchantment. Whoever reads this will be forgotten forever.',
		img: '/items/cursed_book.png',
		isCursed: true,
		level: 'Legendary',
		levelClassName: 'bg-items-legendary',
		modifier: [{
			type: 'attribute',
			name: 'Intelligence',
			id: 4,
			change: 1
		}, {
			type: 'attribute',
			name: 'Wisdom',
			id: 5,
			change: 1
		}]
	},
	'Giant plant seed': {
		name: 'Giant plant seed',
		description: 'Little like a bug, tall like the sky.',
		img: '/items/giant_plant_seed.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Survival',
			id: 32,
			change: 2
		}]
	},
	'Old farmer sickle': {
		name: 'Old farmer sickle',
		description: 'Only the old ones remember this sickle.',
		img: '/items/old_farmer_sickle.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Escape Artist',
			id: 11,
			change: 1
		}]
	},
	'Enchanted useless tool': {
		name: 'Enchanted useless tool',
		description: 'Very promising, but useless.',
		img: '/items/enchanted_useless_tool.png',
		isCursed: true,
		level: 'Epic',
		levelClassName: 'bg-items-epic',
		modifier: [{
			type: 'attributee',
			name: 'Charisma',
			id: 6,
			change: 1
		}, {
			type: 'skill',
			name: 'Craft',
			id: 6,
			change: -1
		}]
	},
	'Dragon egg': {
		name: 'Dragon egg',
		description: 'The perfect pet.',
		img: '/items/dragon_egg.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Handle Animal',
			id: 14,
			change: 1
		}, {
			type: 'skill',
			name: 'Ride',
			id: 25,
			change: 1
		}]
	},
	'Bear claw': {
		name: 'Bear claw',
		description: 'Now, you can claim you survived a Bear.',
		img: '/items/bear_claw.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Bluff',
			id: 3,
			change: 1
		}]
	},
	'Silver sword': {
		name: 'Silver sword',
		description: 'Even the bravest enemy is afraid to reflect on this sword.',
		img: '/items/silver_sword.png',
		isCursed: true,
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Intimidate',
			id: 17,
			change: 2
		}, {
			type: 'skill',
			name: 'Hide',
			id: 16,
			change: -1
		}]
	},
	'Rare ring': {
		name: 'Rare ring',
		description: 'Very rare, hope it has a good price in the market.',
		img: '/items/rare_ring.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Appraise',
			id: 1,
			change: 1
		}]
	},
	'Glove with diamonds': {
		name: 'Glove with diamonds',
		description: 'Glamor is just one of its characteristics.',
		img: '/items/glove_with_diamonds.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Perform',
			id: 23,
			change: 1
		}, {
			type: 'skill',
			name: 'Disguise',
			id: 10,
			change: 1
		}]
	},
	'Haunted cloak': {
		name: 'Haunted cloak',
		description: 'It has a life of its own, it protects those who use it.',
		img: '/items/PIXEL_haunted_cloak.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Spot',
			id: 31,
			change: 1
		}, {
			type: 'skill',
			name: 'Listen',
			id: 20,
			change: 1
		}]
	},
	'Dead hero cape': {
		name: 'Dead hero cape',
		description: 'We honor his former owner, a hero with no name.',
		img: '/items/PIXEL_dead_hero_cape.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Move Silently',
			id: 21,
			change: 1
		}, {
			type: 'skill',
			name: 'Hiden',
			id: 16,
			change: 1
		}]
	},
	'Enchanted talisman': {
		name: 'Enchanted talisman',
		description: 'When it was not enchanted it gave luck, now it only gives death.',
		img: '/items/enchanted_talisman.png',
		isCursed: true,
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Tumble',
			id: 34,
			change: 2
		}, {
			type: 'skill',
			name: 'Balance',
			id: 2,
			change: -1
		}]
	},
	'Warrior watch': {
		name: 'Warrior watch',
		description: 'A warrior never has enough time.',
		img: '/items/warrior_watch.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Survival',
			id: 32,
			change: 1
		}]
	},
	'Metal horse saddle': {
		name: 'Metal horse saddle',
		description: 'Now you only need a horse.',
		img: '/items/metal_horse_saddle.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Ride',
			id: 25,
			change: 2
		}]
	},
	'Witch book': {
		name: 'Witch book',
		description: 'Shady secrets, nobody should see it.',
		img: '/items/witch_book.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Knowledge',
			variant: 'Arcana',
			id: 19,
			change: 2
		}]
	},
	'Unknown animal eye': {
		name: 'Unknown animal eye',
		description: 'From a beast, or a pet, a monster or a bunny.',
		img: '/items/unknown_animal_eye.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Handle Animal',
			id: 14,
			change: 2
		}]
	},
	'Slain warrior armor': {
		name: 'Slain warrior armor',
		description: 'I hope you find it useful.',
		img: '/items/PIXEL_slain_warrior_armor.png',
		isCursed: true,
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'special',
			name: 'Armor Class',
			id: 1,
			change: 2
		}, {
			type: 'skill',
			name: 'Survival',
			id: 32,
			change: -1
		}]
	},
	'Witcher book': {
		name: 'Witcher book',
		description: 'Magic, spells, enchantments. Everything in your hand.',
		img: '/items/witcher_book.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Spellcraft',
			id: 30,
			change: 1
		}, {
			type: 'skill',
			name: 'Knowledge',
			variant: 'Arcana',
			id: 19,
			change: 1
		}]
	},
	'Cursed talisman': {
		name: 'Cursed talisman',
		description: 'When it was not enchanted it gave lucky, now it only gives death.',
		img: '/items/cursed_talisman.png',
		isCursed: true,
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Escape Artist',
			id: 11,
			change: 2
		}, {
			type: 'skill',
			name: 'Jump',
			id: 18,
			change: -1
		}]
	},
	'Antique ring': {
		name: 'Antique ring',
		description: 'An ancient power, a present from the gods, the future of its bearer.',
		img: '/items/antique_ring.png',
		level: 'Legendary',
		levelClassName: 'bg-items-legendary',
		modifier: [{
			type: 'attribute',
			name: 'Wisdom',
			id: 5,
			change: 1
		}, {
			type: 'skill',
			name: 'Knowledge',
			variant: 'Religion',
			id: 19,
			change: 1
		}]
	},
	'Ancient Prince Andre\'s Sword': {
		name: 'Ancient Prince Andre\'s Sword',
		description: 'Hope the prince doesn\'t claim his sword.',
		img: '/items/ancient_prince_andre_s_sword.png',
		level: 'Legendary',
		levelClassName: 'bg-items-legendary',
		modifier: [{
			type: 'attribute',
			name: 'Intelligence',
			id: 4,
			change: 1
		}, {
			type: 'skill',
			name: 'Craft',
			id: 6,
			change: 1
		}]
	},
	'King\'s son sword': {
		name: 'King\'s son sword',
		description: 'It will be yours when you grow',
		img: '/items/king_s_son_sword.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Diplomacy',
			id: 8,
			change: 1
		}, {
			type: 'skill',
			name: 'Knowledge',
			variant: 'Nobility and Royalty',
			id: 19,
			change: 1
		}]
	},
	'Old damaged coin': {
		name: 'Old damaged coin',
		description: 'An old coin, nobody uses it... right?',
		img: '/items/old_damaged_coin.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Gather Information',
			id: 13,
			change: 1
		}]
	},
	'Thunder hammer': {
		name: 'Thunder hammer',
		description: 'Forged in the storm, lightning in your hand.',
		img: '/items/thunder_hammer.png',
		level: 'Epic',
		levelClassName: 'bg-items-epic',
		modifier: [{
			type: 'attribute',
			name: 'Strength',
			id: 1,
			change: 1
		}]
	},
	'Time crystal': {
		name: 'Time crystal',
		description: 'If the former owner of this crystal could go back in time, he would surely avoid losing it.',
		img: '/items/time_crystal.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Balance',
			id: 2,
			change: 1
		}, {
			type: 'skill',
			name: 'Jump',
			id: 18,
			change: 1
		}]
	},
	'Skull fragment': {
		name: 'Skull fragment',
		description: 'A puzzle to solve. What did the former owner of this head think?',
		img: '/items/skull_fragment.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Search',
			id: 26,
			change: 1
		}, {
			type: 'skill',
			name: 'Sense Motive',
			id: 27,
			change: 1
		}]
	},
	'Hawk eye': {
		name: 'Hawk eye',
		description: 'It gives you precision. In your decisions and in your shots.',
		img: '/items/hawk_eye.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Spot',
			id: 31,
			change: 2
		}]
	},
	'Meteorite fragment': {
		name: 'Meteorite fragment',
		description: 'Unknown alien power.',
		img: '/items/meteorite_fragment.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Speak Language',
			id: 29,
			change: 2
		}]
	},
	'Mutant fisheye': {
		name: 'Mutant fisheye',
		description: 'The sea is very strange...',
		img: '/items/mutant_fisheye.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Swim',
			id: 33,
			change: 2
		}]
	},
	'Wolf necklace': {
		name: 'Wolf necklace',
		description: 'For a wolf or a human, or both at the same time.',
		img: '/items/wolf_necklace.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Survival',
			id: 32,
			change: 2
		}]
	},
	'Shadowy rabbit paw': {
		name: 'Shadowy rabbit paw',
		description: 'A one-legged rabbit is still a rabbit.',
		img: '/items/shadowy_rabbit_paw.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Jump',
			id: 18,
			change: 2
		}]
	},
	'Paladin eye': {
		name: 'Paladin eye',
		description: 'Do not lose sight of it, it could be useful for its owner.',
		img: '/items/paladin_eye.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Sense Motive',
			id: 27,
			change: 2
		}]
	},
	'Paladin heart': {
		name: 'Paladin heart',
		description: 'Filled with Valor, glory, but most important, Alturisum',
		img: '/items/paladin_heart.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Heal',
			id: 15,
			change: 2
		}]
	},
	'Red Tanned Gloves': {
		name: 'Red Tanned Gloves',
		description: 'Were these tanned with blood? No one can know.',
		img: '/items/red_tanned_gloves.png',
		level: 'Uncommon',
		levelClassName: 'bg-items-uncommon',
		modifier: [{
			type: 'skill',
			name: 'Use Rope',
			id: 36,
			change: 1
		}]
	},
	'Cat Claw glove': {
		name: 'Cat Claw glove',
		description: 'Which feline was the owner of such claws? Matters not. You may wear don them now.',
		img: '/items/cat_claw_glove.png',
		level: 'Rare',
		levelClassName: 'bg-items-rare',
		modifier: [{
			type: 'skill',
			name: 'Climb',
			id: 4,
			change: 1
		}, {
			type: 'skill',
			name: 'Move Silently',
			id: 21,
			change: 1
		}]
	},
};

export default THE_FOREST_LOOT;