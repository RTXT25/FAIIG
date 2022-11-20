addLayer("ach", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol:"⭐",
    color: "#ffbf00",                       // The color for this layer, which affects many elements.
    resource: "AchiveMents",            // The name of this layer's main prestige resource.
    row: "side",                                 // The row this layer is on (0 is the first row).
    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.
    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.                                           // Also the amount required to unlock the layer
    type: "none",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    achievements: {
        11: {
            name: "Wow You Really Waited",
            done() {
                return hasUpgrade('d',11)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        12: {
            name: "Your Still Here?",
            done() {
                return hasUpgrade('d',12)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        13: {
            name: "Its Getting Faster",
            done() {
                return hasUpgrade('d',13)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        14: {
            name: "Hourly Checkups",
            done() {
                return hasUpgrade('d',14)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        15: {
            name: "31 hours Later",
            done() {
                return hasUpgrade('d',21)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        21: {
            name: "Another Achivement Already",
            done() {
                return hasMilestone('m',0)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        22: {
            name: "Filler Content Part 1",
            done() {
                return hasMilestone('m',1)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        23: {
            name: "Filler Content Part 2",
            done() {
                return hasMilestone('m',2)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        24: {
            name: "Filler Content Part 3",
            done() {
                return hasMilestone('m',3)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        25: {
            name: "Filler Content Part 4",
            done() {
                return hasMilestone('m',4)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        31: {
            name: "Filler Content Part 5",
            done() {
                return hasMilestone('m',5)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        32: {
            name: "Filler Content Part 6",
            done() {
                return hasMilestone('m',6)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        33: {
            name: "Filler Content Part 7",
            done() {
                return hasMilestone('m',7)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        34: {
            name: "Filler Content Part 8",
            done() {
                return hasMilestone('m',8)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        35: {
            name: "Filler Content Part 9",
            done() {
                return hasMilestone('m',9)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        41: {
            name: "Filler Content Part 10",
            done() {
                return hasMilestone('m',10)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
        42: {
            name: "Longer Than A Year",
            done() {
                return hasMilestone('m',11)
            },
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
    },
    infoboxes: {
        InfoMain: {
            title: "Info about Info",
            body() { return "This is the info tab<br>there will be more information here at a later date" },
        },
    },
    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.
        tabFormat: {
            "Achivements": {
                content: [
                    "main-display",
                    "achievements",
                ],
            },
            "Info": {
                content: [
                    "main-display",
                    ["row", [["infobox", "InfoMain"],],],
                ],
            },
            "BALLS": {
                content: [
                    
                    ["row",[["display-text",function() { return 'B' },{"font-size": "170px","font-family": "Comic Sans MS"}],
                            ["display-text",function() { return 'A' },{"color":"red","font-size": "170px","font-family": "Comic Sans MS"}],
                            ["display-text",function() { return 'L' },{"color":"orange","font-size": "170px","font-family": "Comic Sans MS"}],
                            ["display-text",function() { return 'L' },{"color":"green","font-size": "170px","font-family": "Comic Sans MS"}],
                            ["display-text",function() { return 'S' },{"color":"pink","font-size": "170px","font-family": "Comic Sans MS"}],],
                    ],
            ],
            },
        },
})