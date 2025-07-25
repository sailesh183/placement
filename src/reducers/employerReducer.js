export const employerReducer=(state,{type,payload})=>{
    switch(type)
    {
        case 'CompanyName':
            return{
                ...state,
                companyName: payload
            }
        case 'ContactPerson':
            return{
               ...state,
                contactPerson: payload
            }
        case 'Email':
            return{
               ...state,
                email: payload
            }
        case 'Phone':
            return{
               ...state,
                phoneNumber: payload
            }
        case 'Industry':
            return{
               ...state,
                industry: payload
            }
        case 'Location':
            return{
               ...state,
                location: payload
            }
        case 'Website':
            return{
               ...state,
                website: payload
            }
        case 'Password':
            return{
               ...state,
                password: payload
            }
        case 'Clear':
        return{
            companyName: '',
            contactPerson: '',
            email: '',
            phoneNumber: '',
            industry: '',
            location: '',
            website: '',
            password: ''
        };
        default:
            return state;
    }
}