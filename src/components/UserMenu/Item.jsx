
const Item = ({children, title, url}) => {
  return (
    <div className="profile text-blueDark flex items-center gap-5 hover:text-primary">   
        <h3 className='text-xl  font-semibold'>{title}</h3>
        {children}
    </div>
  )
}

export default Item