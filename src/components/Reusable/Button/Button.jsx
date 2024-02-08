import classes from './Button.module.css'

const Button = ({type, action, children}) => {

  return (
    <button 
        type={type} className={`${classes[`${action}`]}`}>
        {children}
    </button>
  )
}

export default Button   