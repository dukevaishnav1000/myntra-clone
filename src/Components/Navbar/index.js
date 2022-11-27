import React from 'react';
import "./index.css";


export default function Navbar()
{

//   return(
//   <nav className="navbar navbar-expand-lg bg-light">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="#">
//       <img src="./logo.PNG" alt="Bootstrap" width="30" height="24"/>
//       MYNTRA</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-Target="#navbarNavDropdown" ariaControls="#navbarNavDropdown" ariaExpanded="false" ariaLabel="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//       </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
       
//         {/* <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" ariaLabel="Search"/>
//         <button className="btn btn-outline-success " type="submit">Search</button>
//         </form> */}
//       </ul>
//     </div>
//     </div>
// </nav>);


// return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
// <a className="navbar-brand" href="#">
//   <img src="./logo.PNG" alt="Bootstrap" width="30" height="24"/></a>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//     <li className="nav-item active">
//       <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#">Link</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link disabled" href="#">Disabled</a>
//     </li>
//   </ul>
//   <form className="form-inline my-2 my-lg-0">
//     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </div>
// </nav>)

return(
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
  <img src="./logo.PNG" alt="Bootstrap" width="30" height="24"/>Myntra</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-lg-5" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 ms-lg-5 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Kids</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Home & living</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">offers</a>
        </li>
        <li className="nav-item ms-lg-5">
          <form className="d-flex" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success ms-2" type="submit">Search</button>
          </form>    
        </li>
      </ul>
    </div>
  </div>
</nav>
);
  
}



