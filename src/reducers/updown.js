const initialState=100

const changeNUmber=(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state+action.payload;
        case "DECRIMENT":return state-action.payload;
        case "zero":return state=0;
        default :return state
    }
}

export default changeNUmber