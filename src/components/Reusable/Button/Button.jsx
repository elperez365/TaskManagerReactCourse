import classes from './Button.module.css'

const Button = ({type, action, children, onClick, ...props}) => {

  return (
    <button 
        type={type} className={`${classes[`${action}`]}`} onClick={onClick} {...props}>
        {children}
    </button>
  )
}

export default Button   