import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext)

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
      }}
    >
      <span>{themeMode === 'light' ? 'Turn Off' : 'light on'}</span>
    </div>
  )
}

export default ThemeToggler
