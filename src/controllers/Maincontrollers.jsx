import { Link, NavLink } from 'react-router-dom'
export const Maincontrollers = () => {

    return (
        <>
    <nav className="navbar navbar-expand-md mt-3 sticky-top p-0">
    
    <div className="container ok">
      <a href="#" className="navbar-brand">
        <span className="ms-2 brand">Chintan</span>
      </a>
      
    
      <button className="navbar-toggler navbar-toggler-icon" data-bs-toggle="offcanvas" data-bs-target="#show">
        <span><i className="bi bi-three-dots-vertical text-white" style={{"cursor":"pointer"}}></i></span>
        
      </button>
      

      {/* Main item */}
      <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="show" aria-labelledby="offcanvasNavbarLabel ">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <span className="text-light ">Chintant</span>
          </h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
            
        </div>
        <div className="offcanvas-body d-flex justify-content-end">
          <ul className="navbar-nav text-center ">
          <span className='sidebar'>
          <ul className='item'>
               
                 <li><NavLink className={'con'} to={'/'}>Home</NavLink></li>
                <li><NavLink className={'con'} to={'/about'}>About</NavLink></li>
                <li><NavLink className={'con'} to={'/skill'}>Skill</NavLink></li>
                <li><NavLink className={'con'} to={'/project'}>Project</NavLink></li>
                <li><NavLink className={'con'} to={'/contact'}>Contact</NavLink></li>
           </ul>
          </span>  
          </ul>
        </div>
      </div>
      

    </div>
  </nav>

        </>
    )
}
