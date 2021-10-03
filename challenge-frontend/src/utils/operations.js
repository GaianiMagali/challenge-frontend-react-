


export const sumPowerstats = (list, powerstat) => {
    let sum = 0;
    list.forEach(heroe => 
        {sum += Number(heroe.powerstats[powerstat])}
    )

    return sum;
}

export const averageWeight = (list) => {
    let sum = 0;
    let average;
    list.forEach(heroe => 
        {sum += Number(heroe.appearance.weight[1].split(' ')[0])}
    )

    average = Math.round( sum / list.length);

    return average;
}

export const averageHeight = (list) => {
    let sum = 0;
    let average;
    list.forEach(heroe => 
        {sum += Number(heroe.appearance.height[1].split(' ')[0])}
    )

    average = Math.round( sum / list.length);

    return average;
}