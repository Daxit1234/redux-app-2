export const intcNumber=(num)=>{
    return{
        type:"INCREMENT",
        payload:num
    }
}
export const decNumber=(num)=>{
    return{
        type:"DECRIMENT",
        payload:num
    }
}
export const filzero=()=>{
    return{
        type:"zero"
    }
}