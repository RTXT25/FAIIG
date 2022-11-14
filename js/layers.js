addLayer("d", {
    name: "day", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(86400), // Can be a function that takes requirement increases into account
    resource: "Days", // Name of prestige currency
    baseResource: "Fun Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    canbuymax() {return false},
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0, // Prestige currency exponent
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
            description:"Unlock Months",
            unlocked() { return hasUpgrade('d',14)},
        },
    },
    layerShown(){return true}
})
addLayer("m", {
    name: "month", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#d4651c",
    requires: new Decimal(31), // Can be a function that takes requirement increases into account
    resource: "Months", // Name of prestige currency
    baseResource: "Days", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    branches:"d",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)

    milestones: {
        0: {
            requirementDescription: "January",
            effectDescription: "Get 1 Month",
            done() { return player.m.points.gte(1) }
        },
        1: {
            requirementDescription: "Febuary",
            effectDescription: "31 Day Feb???",
            done() { return player.m.points.gte(2) },
            unlocked() { return hasMilestone('m',0)},
        },
        2: {
            requirementDescription: "March",
            effectDescription: "Marc",
            done() { return player.m.points.gte(3) },
            unlocked() { return hasMilestone('m',1)},
        },
        3: {
            requirementDescription: "April",
            effectDescription: "Fool",
            done() { return player.m.points.gte(4) },
            unlocked() { return hasMilestone('m',2)},
        },
        4: {
            requirementDescription: "May",
            effectDescription: "Gay",
            done() { return player.m.points.gte(5) },
            unlocked() { return hasMilestone('m',3)},
        },
        5: {
            requirementDescription: "June",
            effectDescription: "Spoon",
            done() { return player.m.points.gte(6) },
            unlocked() { return hasMilestone('m',4)},
        },
        6: {
            requirementDescription: "July",
            effectDescription: "Ford",
            done() { return player.m.points.gte(7) },
            unlocked() { return hasMilestone('m',5)},
        },
        7: {
            requirementDescription: "August",
            effectDescription: "Idk I Have No Jokes For This Month",
            done() { return player.m.points.gte(8) },
            unlocked() { return hasMilestone('m',6)},
        },
        8: {
            requirementDescription: "September",
            effectDescription: "The 11th",
            done() { return player.m.points.gte(9) },
            unlocked() { return hasMilestone('m',7)},
        },
        9: {
            requirementDescription: "October",
            effectDescription: "Spoopy",
            done() { return player.m.points.gte(10) },
            unlocked() { return hasMilestone('m',8)},
        },
        10: {
            requirementDescription: "November",
            effectDescription: "Non-Stop Is Better",
            done() { return player.m.points.gte(11) },
            unlocked() { return hasMilestone('m',9)},
        },
        11: {
            requirementDescription: "December",
            effectDescription: "Christmas Time",
            done() { return player.m.points.gte(12) },
            unlocked() { return hasMilestone('m',10)},
        },
    },

    tabFormat: [
                "main-display",
                ["row", ["prestige-button"]],
                "blank",
                "resource-display",
                "blank",
                ["row", [["milestone", 0],["milestone", 1], ["milestone", 2]],],
                ["row", [["milestone", 3],["milestone", 4], ["milestone", 5]],],
                ["row", [["milestone", 6],["milestone", 7], ["milestone", 8]],],
                ["row", [["milestone", 9],["milestone", 10], ["milestone", 11]],],
    ],
    hotkeys: [
        {key: "m", description: "M: Reset for months", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    layerShown(){return true}
})

