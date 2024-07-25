import  { useContext } from 'react'
import { Context } from '../context/Context'
import{FaSun, FaMoon} from 'react-icons/fa'
export const DarkMode = () => {

    const { isDarkMode, toggleDarkMode } = useContext(Context)

    //Metodo que se ejecute al hacer click en el icono

    const handleClick = () =>{
        toggleDarkMode()
        localStorage.setItem('dark-mode', !isDarkMode)
    }


  return (
    <button onClick={handleClick} className='dark-mode-button'>
      {isDarkMode ? (
        <FaSun className="dark-mode-icon dark-mode-icon-sun"/>
      ) : (
        <FaMoon className="dark-mode-icon dark-mode-icon-moon"/>
      ) }
    </button>
  )
}
