import './style.css';
import React from 'react'

class FilterSection extends React.Component{

handleReset=function(){
  let shirts=document.getElementsByClassName("card");

  for(let i=0;i<shirts.length;i++)
  shirts[i].style.display="block";
}


handleCheckbox=function(event){
  let shirts=document.getElementsByClassName("card");

  for(let i=0;i<shirts.length;i++)
  shirts[i].style.display="none";
  let flag=false;
for(let i=0;i<shirts.length;i++)
{
  

  if(event.target.className=="BrandCbs")
  {   
   
      let brandcbs=document.getElementsByClassName("BrandCbs"); 
     // console.log(document.getElementsByClassName("BrandCbs"));
     for(let j=0;j<brandcbs.length;j++)
     {  if(brandcbs[j].checked==true && shirts[i].getElementsByClassName("card-title")[0].innerHTML==brandcbs[j].value)
        {shirts[i].style.display="block";
          flag=true;
        }
      }
  }


  if(event.target.className=="PriceCbs")
  {   
   
      let pricecbs=document.getElementsByClassName("PriceCbs"); 
      console.log(pricecbs);
     console.log(parseInt(shirts[i].getElementsByClassName("shirtPrice")[0].innerHTML.split(" ")[1]));

      if(pricecbs[0].checked==true && parseInt(shirts[i].getElementsByClassName("shirtPrice")[0].innerHTML.split(" ")[1])<=500)
      {shirts[i].style.display="block";
        flag=true;
      }
      else if(pricecbs[1].checked==true && parseInt(shirts[i].getElementsByClassName("shirtPrice")[0].innerHTML.split(" ")[1])<=1000)
        {shirts[i].style.display="block";
          flag=true;
        }
      else if(pricecbs[2].checked==true && parseInt(shirts[i].getElementsByClassName("shirtPrice")[0].innerHTML.split(" ")[1])<=2000)
        {shirts[i].style.display="block";
          flag=true;
        }
      else if(pricecbs[3].checked==true && parseInt(shirts[i].getElementsByClassName("shirtPrice")[0].innerHTML.split(" ")[1])<=3000)
        {shirts[i].style.display="block";
          flag=true;
        }
        console.log("flag is "+flag);
  }

  // if(event.target.className=="BrandCbs")
  // {   
   
  //     let brandcbs=document.getElementsByClassName("BrandCbs"); 
  //    // console.log(document.getElementsByClassName("BrandCbs"));
  //    for(let j=0;j<brandcbs.length;j++)
  //    {  if(shirts[i].getElementsByClassName("card-title")[0].innerHTML==event.target.value)
  //       {shirts[i].display.style="block";
  //         flag=true;
  //       }
  //     }
  // }

  if(event.target.className=="SizeCbs")
  {   
    
      let sizecbs=document.getElementsByClassName("SizeCbs"); 
     console.log(sizecbs[0].id);
     
     for(let j=0;j<sizecbs.length;j++)
     { console.log(shirts[i].getElementsByClassName("buttonList")[0].classlist);
      if(sizecbs[j].checked==true && shirts[i].getElementsByClassName(sizecbs[j].id)[0])
        {shirts[i].style.display="block";
          flag=true;
        }
      }
  }


}
if(flag==false){
  if(event.target.checked==true)
  {for(let i=0;i<shirts.length;i++)
  shirts[i].style.display="none";
  }
  else
  {
    for(let i=0;i<shirts.length;i++)
  shirts[i].style.display="block";
  }
  return;
}


     
      

  }

render(){
  return (
    
    <div className="FilterSection">
    <form>
    <h5 className="shirtFilter">Filters</h5>
    
    <ul className="PersonCategory" type="none">
    <li><input type="radio" id="Men" value="Men" disabled={true} defaultChecked="true"/><label> Men</label></li>
    <li><input type="radio" id="Women" value="Women" disabled={true} /><label> Women</label></li>
    <li><input type="radio" id="Boys" value="Boys" disabled={true}/><label> Boys</label></li>
    <li><input type="radio" id="Girls" value="Girls" disabled={true}/><label> Girls</label></li>
    <br/>
    </ul>
    <ul className="BrandCategory" type="none" >
    <li><span>Brands</span></li>
    <li><input type="checkbox" className="BrandCbs" id="Louis Philipe" value="Louis Philipe" onClick={this.handleCheckbox}/><label> Louis Philipe</label></li>
    <li><input type="checkbox" className="BrandCbs" id="Peter England" value="Peter England"  onClick={this.handleCheckbox}/><label> Peter England</label></li>
    <li><input type="checkbox" className="BrandCbs" id="Mufti" value="Mufti" onClick={this.handleCheckbox}/><label> Mufti</label></li>
    <li><input type="checkbox" className="BrandCbs" id="HRX" value="HRX" onClick={this.handleCheckbox}/><label> HRX</label></li>
    <br/>
    </ul>
    <ul className="Price" type="none">
    <li><span>Price</span></li>
    <li><input type="checkbox" className="PriceCbs"  value="500" onClick={this.handleCheckbox}/><label>{"< 500 ₹"}</label></li>
    <li><input type="checkbox" className="PriceCbs"  value="1000"  onClick={this.handleCheckbox}/><label> 500-1k ₹</label></li>
    <li><input type="checkbox" className="PriceCbs"  value="2000" onClick={this.handleCheckbox}/><label> 1k-2k ₹</label></li>
    <li><input type="checkbox" className="PriceCbs"  value="3000" onClick={this.handleCheckbox}/><label> 2k-3k ₹</label></li>
    <br/>
    </ul>
    <ul className="Size" type="none">
    <li><span>Size</span></li>
    <li><input type="checkbox" className="SizeCbs" id="xl1" value="xl1" onClick={this.handleCheckbox}/><label>XL</label></li>
    <li><input type="checkbox" className="SizeCbs" id="xl2" value="xl2"  onClick={this.handleCheckbox}/><label>2XL</label></li>
    <li><input type="checkbox" className="SizeCbs" id="xl3" value="xl3" onClick={this.handleCheckbox}/><label>3XL</label></li>
    <li><input type="checkbox" className="SizeCbs" id="xl4" value="xl4" onClick={this.handleCheckbox}/><label>4XL</label></li>
    <br/>
    </ul>
    <input type="reset" value="reset" onClick={this.handleReset}/>
    </form>
    </div>
  )
  }

}

export default FilterSection;