export const JobReducer=(state,{type,payload})=>{
    switch(type)
    {
        case "Title":
            return {...state,title:payload}
        case "Description":
            return {...state,description:payload}
        case "Location":
            return {...state,location:payload}
        case "Salary":
            return {...state,salary:payload}
        case "Clear":
            return {
                title:'',
                description:'',
                location:'',
                salary:''
            }
        default:
            return state;
    }
}