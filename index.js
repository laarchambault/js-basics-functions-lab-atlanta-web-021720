
function distanceFromHqInBlocks(numBlock) {
    let dist = (42 - numBlock);
    dist = Math.abs(dist)
    return dist
}

function distanceFromHqInFeet(numBlock) {
    let dist = distanceFromHqInBlocks(numBlock);
    dist = (dist * 264)
    return dist
}

function distanceTravelledInFeet(start, destination) {
    let numBlock = (start - destination)
    numBlock = Math.abs(numBlock)
    let dist = (numBlock * 264)
    return dist
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    let price;
    if (feet <= 400) {
        price = 0
    } else if (feet < 2000 && feet > 400) {
        price = ((feet - 400) * .02) 
    } else if (feet >= 2000 && feet <= 2500) {
        price = 25
    } else {
        price = "cannot travel that far"
    }
    return price
}
