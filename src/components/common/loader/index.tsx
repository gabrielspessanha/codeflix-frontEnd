import './styles.scss'

const Loader= () => {
  return (
    <div>
      <svg className="spinner" width="100px" height="100px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
      <p>Carregando...</p>
    </div>
  )
}

export default Loader