import logo from '../../assets/Logo/GG-LOGO-LIGHT.png'

const CardStore = ({items}) => {
  return (
    <div className='w-fit relative p-6 text-white flex flex-col items-center justify-center hover:scale-105 duration-400'>
        <img className='w-32 mx-auto py-4' src={logo} alt="" />
        <h1 className='text-3xl text-center font-semibold'>{items.name}</h1>
        <span className='text-xl font-semibold flex'>$ {items.price}</span>
    </div>
  )
}

export default CardStore