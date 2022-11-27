import React from 'react';
import './style.css';
import ShirtCard from '../ShirtCard';

class ShirtsContainer extends React.Component{

  constructor(props){
    super(props);
  this.state={shirts:[{
      imageurl:"blueLPcottons.jpg",
      Brand:"Louis Philipe",
      name:"Light Blue Cotton Plain Shirt",
      size_available:["xl1","xl3","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false,
      displayVal:"block",
      SellingPrice:1499,
      MRP:3000
    },{
      imageurl:"RedLPcheckss.jpg",
      Brand:"Louis Philipe",
      name:"Red & Black Cotton Checkered Shirt",
      size_available:["xl1","xl2",],
      size_selected:[],
      quantity:0,
      wishlist:false,
      displayVal:"block",  
      SellingPrice:1899,
      MRP:2680
    },
    {
      imageurl:"whiteMuftiT.webp",
      Brand:"Mufti",
      name:"vanilla half pure cotton Tshirt ",
      size_available:["xl1","xl3","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false,
      displayVal:"block",
      SellingPrice:1999,
      MRP:4500  
    },{
      imageurl:"BlackMuftiPlainT.webp",
      Brand:"Mufti",
      name:"Black pure cotton Tshirt  ",
      size_available:["xl2","xl3","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false,
      displayVal:"block",
      SellingPrice:990,
      MRP:2000  
    },{
      imageurl:"BlackPEcheckss.webp",
      Brand:"Peter England",
      name:"Black & White checks Shirt",
      size_available:["xl1","xl2","xl3","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false,
      displayVal:"block",
      SellingPrice:450,
      MRP:1900   
    },
    {
      imageurl:"CyanplaincottonT.webp",
      Brand:"Mufti",
      name:"Cyan soft cotton half Tshirt",
      size_available:["xl1","xl2","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false  ,
      displayVal:"block",
      SellingPrice:1200,
      MRP:3400 
    },{
      imageurl:"OrangeHRXplainT.webp",
      Brand:"HRX",
      name:"Orange Polo cotton half Tshirt",
      size_available:["xl1","xl2","xl3"],
      size_selected:[],
      quantity:0,
      wishlist:false  ,
      displayVal:"block",
      SellingPrice:1300,
      MRP:1900 
    },{
      imageurl:"BluePEcheckss.webp",
      Brand:"Peter England",
      name:"navy Blue Checks Shirt",
      size_available:["xl3","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false  ,
      displayVal:"block",
      SellingPrice:1980,
      MRP:2300
    },{
      imageurl:"indigoAllenSollyT.webp",
      Brand:"Allen Solly",
      name:"Plain Indigo full sleeves shirt",
      size_available:["xl1","xl2","xl3","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false,
      displayVal:"block",
      SellingPrice:560,
      MRP:1800
    },{
      imageurl:"GreenHalfHRXT.webp",
      Brand:"HRX",
      name:"Green half HRX Tshirt",
      size_available:["xl2","xl4"],
      size_selected:[],
      quantity:0,
      wishlist:false,
      displayVal:"block",
      SellingPrice:2500,
      MRP:5000
    }]}
}
  render(){ 
    return (
    <div className='ShirtsContainer'>
    {
      this.state.shirts.filter((shirt)=>{        
        return (shirt.displayVal==="block")}).map(shirt=>{
        return (<ShirtCard imageurl={shirt.imageurl} Brand={shirt.Brand} name={shirt.name} size_available={shirt.size_available} size_selected={shirt.size_selected} displayVal={shirt.displayVal} quantity={shirt.quantity}  wishlist={shirt.wishlist} SellingPrice={shirt.SellingPrice} MRP={shirt.MRP} key={shirt.name}/>)
      })
    }
    </div>
  )
  }
}

export default ShirtsContainer;