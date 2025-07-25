import { FaSignOutAlt } from 'react-icons/fa';
import logo1 from '../../../assets/employer.png'
import { useNavigate } from 'react-router-dom';

export const NavBar=()=>{
    const navigate=useNavigate();
    return (
    
        <header className="flex gap-3 p-3 border-gray-200  border-b-2 justify-between">
            <div className='flex gap-3'>
            <div className='w-12 h-12'>
            <img src={logo1} alt='logo' className='w-full h-full'/>
            </div>
            <h1 className='text-blue-800 font-bold text-4xl'>PlacementPulse</h1>
            </div>
             <div className='flex gap-1 mr-0 hover:cursor-pointer' onClick={()=>{
                navigate('/login');
                localStorage.removeItem('user');
                localStorage.removeItem('token');
             }
             }>
                <span className=' my-5 text-blue-800'><FaSignOutAlt/></span>
                <p className='font-semibold text-blue-800 my-4'>logout</p>
             </div>
            
        </header>
        
        
    );
}