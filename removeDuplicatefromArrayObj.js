const arr = [
    {   title: 'a', value: 23 },
    {   title: 'b', value: 24 },
    {   title: 'c', value: 43 },
    {   title: 'a', value: 34 },
    {   title: 'e', value: 67 },
    {   title: 'a', value: 55 },
    {   title: 'b', value: 4 }
]

function removeDuplicate(arr){

    var unique = arr.reduce((acc,current,index)=>{
        
        if(!acc.find(item=> item.title == current.title)){
            acc.push(current);
        }
        return acc;

    },[])

    return unique;

}

const uniqueArr = removeDuplicate(arr);
console.log("uniqueArr--->  ",uniqueArr);