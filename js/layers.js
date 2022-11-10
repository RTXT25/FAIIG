addLayer("d", {
    name: "day", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#fafafa",
    requires: new Decimal(86400), // Can be a function that takes requirement increases into account
    resource: "Days", // Name of prestige currency
    baseResource: "Fun Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "d: Reset for days", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    upgrades:{
        11: {
            title:"Half A Day",
            cost: new Decimal(1),
	    description:"Wait half a day for a day",
        },
        12: {
            title:"Half A Half A Day",
            cost: new Decimal(1),
	    description:"Wait half a half a day for a day",
            unlocked() { return hasUpgrade('d',11)},
        },
        13: {
            title:"Half A Half A Half A Day",
            cost: new Decimal(1),
	    description:"Wait half a half a half a day for a day",
            unlocked() { return hasUpgrade('d',12)},
        },
        14: {
            title:"1 HOUR????????",
            cost: new Decimal(1),
	    description:"One hour days what?",
            unlocked() { return hasUpgrade('d',13)},
        },
	21: {
            title:"A Month",
            cost: new Decimal(31),
	    description:"Unlock Months<br>Current Endgame",
            unlocked() { return hasUpgrade('d',14)},
        },
	    
    },
    layerShown(){return true}
})
