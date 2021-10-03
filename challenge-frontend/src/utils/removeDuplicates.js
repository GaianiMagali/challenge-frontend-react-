


export const removeDuplicates = (array) =>{
    var hash = {};
    return array.filter(o => hash[Number(o.id)] ? false : hash[Number(o.id)] = true);
}