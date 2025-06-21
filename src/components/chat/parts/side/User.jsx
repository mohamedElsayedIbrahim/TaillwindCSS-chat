import Button from '../../../Ui/Button'

export default function User() {
  return <>
  
  <div className='text-center my-4 flex flex-col justify-center items-center'>
    <img src="https://th.bing.com/th/id/OIP.SprBqWDT6o2YUZSnZPV_zQHaHa?r=0&rs=1&pid=ImgDetMain" alt="user image"  className='w-1/3 rounded mb-2'/>
    <h4>Username Alexander app</h4>
  </div>

  <div className='my-4'>
    <Button text="Back to profile" />
  </div>
  
  </>
}
