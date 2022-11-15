let modInfo = {
	name: "A Fun And Interactive Idle Game",
	id: "AFAIIG",
	author: "RTXT25",
	pointsName: "fun pOints",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 99999999999999999999999999999,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "2.one",
	name: "13 Month Till Christmass",
}

let changelog = `<h2>-Endgame At "December" Milestone-</h3><br><br>
	<h1>Changelog:</h1><br><br>
	<h3>v2.one 13 Months Till Christmass</h3><br>
		+ "A month" Upgrade now makes Fun Point Gain 69<br>
		+ Months Now Add To Point Gain<br>
		* Made The O in fun pOints capital<br>
		* Fixed Months Unlocking<br>
		<br>

	<h2>v2.0 13 Months Till Christmass</h2><br>
		+ Added Months Layer<br>
		+ Added Months Currency<br>
		+ Added 12 Months Milestones<br>
		<br>

	<h3>v1.3 Only Fun Times</h4><br>
		* Fix Days Prestige<br>
		<br>

	<h3>v1.2 Only Fun Times</h4><br>
		+ Added Description For Days Upgrades<br>
		<br>

	<h3>v1.1 Only Fun times</h4><br>
		+ Added 1 Days Upgrade<br>
		<br>
		
	<h2>v1.0 Only Fun Times</h3><br>
		+ Added Days<br>
		+ Added 4 Days Upgrades<br>
		`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(1)
	
	if (hasUpgrade('d', 11)) gain = gain.times(2)
	if (hasUpgrade('d', 12)) gain = gain.times(2)
	if (hasUpgrade('d', 13)) gain = gain.times(2)
	if (hasUpgrade('d', 14)) gain = gain.times(3)
	if (hasUpgrade('d', 21)) gain = gain.times(0)
	if (hasUpgrade('d', 21)) gain = gain.add(69)

	gain = gain.add(player.m.points)

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
