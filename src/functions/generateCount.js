export const generateCount=(users)=>{
    const countObj={};

    users.forEach(element => {
        if(countObj[element.time]!==undefined){
            countObj[element.time]+=1;
        }
        else{
            countObj[element.time]=1;
        } 
    });
    let countArray=[];

    for(let i in countObj){
        countArray.push(countObj[i]);
    }

    return countArray
}