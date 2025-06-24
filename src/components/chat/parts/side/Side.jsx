
import User from './User';
export default function Side() {

  
  return <>

  <div id='sideRef' data-show='0' className="sidebar w-xs bg-gray-950 h-full flex-col justify-between items-stretch p-2 hidden md:flex">

    <User />
    
  </div>
  
  </>
}
