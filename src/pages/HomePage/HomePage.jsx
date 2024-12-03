import toast from 'react-hot-toast'

const HomePage = () => {
  return (
    <div>
      Home
      <button
      onClick={() => {
        console.log('clicked')
        toast.success('Hello from toast!')
      }}
      type="" className="">Toast check</button>
    </div>
  )
}

export default HomePage
