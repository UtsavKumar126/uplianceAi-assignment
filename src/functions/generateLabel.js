export const generateLabels=(users)=>{
    const dates=[];
    users.forEach(element => {
        if(!dates.includes(element.time)){
            dates.push(element.time)
        }
    });
    return dates
}