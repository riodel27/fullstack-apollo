
/**truthy check */
const data = [1,2]
data && console.log('data: ', data)

/**array to object - makes it faster when searching*/
const dataArray = ['a','b','c']
const dataObject = {...dataArray}
console.log('data object from array: ',JSON.stringify(dataObject,null,2))