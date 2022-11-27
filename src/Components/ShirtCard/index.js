import React from 'react'
import "./style.css";
;
function ShirtCard({imageurl,Brand,Name,size_available,size_selected,quantity,displayVal,wishlist,SellingPrice,MRP}) {
  return (
    <div className="card">
    <img className="card-img-top col-lg-4 shirtImage" src={imageurl} alt="Card image cap"/>
    <div className="card-body">
      <span className="card-title">{Brand}</span>
      <span className="card-text shirtName">{Name}</span>
      <div className="priceContainer">
      <span className="card-text shirtPrice">₹ {SellingPrice}</span>
      <sub className="mrp">₹{MRP}</sub>
      </div>
      <div className={"buttonList "+size_available}>
        <div className={"btn SizeButton"+(size_available.includes("xl1")?" btn-danger xl1":" btn-outline-danger ")} value={size_available} id="xl1">xl</div>
        <div className={"btn SizeButton"+(size_available.includes("xl2")?" btn-danger xl2":" btn-outline-danger ")} value={size_available} id="xl2">2xl</div>
        <div className={"btn SizeButton"+(size_available.includes("xl3")?" btn-danger xl3":" btn-outline-danger ")} value={size_available} id="xl3">3xl</div>
        <div className={"btn SizeButton"+(size_available.includes("xl4")?" btn-danger xl4":" btn-outline-danger ")} value={size_available} id="xl4">4xl</div>
      </div>
      <a href="#" className="btn btn-primary btn-block  cartBtn">Add To Cart</a>
      <span>Or</span>
      <a href="#" className="btn btn-danger btn-block wishBtn mt-lg-0" >Move to Wishlist</a>
    </div>
  </div>
  ) 

}

export default ShirtCard