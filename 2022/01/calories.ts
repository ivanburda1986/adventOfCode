import {load} from './load'
type elfLoad = number[];


export const getIndividualElveLoads = (allLoadsCrude:string): number[][] => {
    const result: number[][] = [];
    let temp: number[] = [];

    for(const element of allLoadsCrude.split('\n')){
        if(element===''){
            result.push(temp);
            temp=[];
        }
        else{
            temp.push(Number(element))
        }
    }
    return result
};

export const findElfWithHighestLoad = (allLoads:number[][]):number=>{
    let highestLoadSum = -Infinity;

    for(const array of allLoads){
        const sum = array.reduce((a,b)=>a+b,0)
        if(sum>highestLoadSum){
            highestLoadSum = sum;
        }
    }
    return highestLoadSum;
}

console.log(findElfWithHighestLoad(getIndividualElveLoads(load)));
