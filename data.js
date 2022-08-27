export const params = {
    start:450,//7*60+30
    posBigPauseNormal:3,
    posBigPauseOther:4,
    maxTimepiece:20
}

export const generateTable = (val,pause,bigPause) =>{
    let table=[{key:0,start:450,end:450+val}]
    for(let i=1;i<20;i++){
        //console.log('függvényből?',table[i-1].end)
        if((val==45 && i==4) || (val<45 && i==5))
            table=[...table,{key:i,start:table[i-1].end+bigPause,end:table[i-1].end+bigPause+val}]
        if((val==45 && i!=4) || (val<45 && i!=5))
            table=[...table,{key:i,start:table[i-1].end+pause,end:table[i-1].end+pause+val}]
        
    }
    return table
}