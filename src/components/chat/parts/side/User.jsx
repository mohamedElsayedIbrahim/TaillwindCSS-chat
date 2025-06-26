import { useContext } from 'react';
import Button from '../../../Ui/Button'
import { MessageContext } from '../../../../context/MessageContext';

export default function User() {

  const {user} = useContext(MessageContext);

    const handleLogOut = () => {
    localStorage.removeItem("USER-TELEGRAM");
    location.replace(location.origin + "/user/profile");
  };

  return <>
  
  <div className='text-center my-4 flex flex-col justify-center items-center'>
    <img src={user.url} alt="user image"  className='w-1/3 rounded mb-2'/>
    <h4>{user.name}</h4>
  </div>

  <div className='my-4'>
    <Button text="Back to profile" eventClick={handleLogOut}/>
  </div>
  
  </>
}
