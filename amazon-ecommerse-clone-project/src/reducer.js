export const initialState = {
    basket :[],
    user:null,
};

const reducer = (state,action) => {
    console.log(action);
    switch (action.type)    {
        case "Add_TO_CART":
            return{
                ...state,basket:[...state.basket, action.item],
            };
        
    
        default:
            return state;
    }
};

export default reducer;
