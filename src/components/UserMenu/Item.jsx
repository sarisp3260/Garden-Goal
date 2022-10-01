import { Link } from "react-router-dom"


const Item = ({children, title, url}) => {

  return (
    <Link to={url} className="profile text-blueDark flex items-center gap-5 hover:text-primary">   
        <h3 className='text-xl  font-semibold'>{title}</h3>
        {children}
    </Link>
  )
}

export default Item