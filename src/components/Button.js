import './button.css'

const Button = ({title}) => {
  return (
    <button href={title} className="boton">{title}</button>
  )
}

export default Button