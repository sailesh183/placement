export const UserNavbar=()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    return(
        <header className="flex  w-full p-1">
        <div className="flex  flex-col items-end justify-end flex-1">
        <img
          src={`data:image/jpeg;base64,${user.userBase.profilePhoto}`} 
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover object-center border-2 border-blue-500 shadow-md mx-3"
        />
        <p className="font-bold text-sm">{user.userBase.name}</p>
        </div>
        </header>
    )
}