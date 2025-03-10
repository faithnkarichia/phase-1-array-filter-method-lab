// Code your solution here
function findMatching(drivers, name) {
 return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
}
findMatching(drivers,"bobby");




function fuzzyMatch(drivers,name) {

    return drivers.filter((driver)=> driver.startsWith(name))
}
fuzzyMatch(drivers);

function matchName(drivers, query) {

    return drivers.filter((driver)=>driver.name===query)
}
matchName(drivers,"bobby")
