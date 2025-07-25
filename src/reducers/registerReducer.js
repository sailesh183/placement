
export const registerReducer=(state,{type,payload})=>{
    switch(type)
    {
        case 'Name':
            return{
               ...state,
               name:payload
            };
        case 'Email':
            return{
                ...state,
                email:payload
            };
        case 'Phno':
            return{
                ...state,
                phoneNumber:payload
            };
        case 'Department':
            return{
                ...state,
                department:payload
            };
        case 'Year':
            return{
                ...state,
                year:payload
            };
        case 'Password':
            return{
               ...state,
                password:payload
            };
        case 'Clear':
            return{
                name:'',
                email:'',
                phoneNumber:'',
                department:'',
                year:'',
                password:''
            };
        default:
            return state;
    }
}