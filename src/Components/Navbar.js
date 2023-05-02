import React, {useRef, useState} from 'react'
import "../CSS/Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@chakra-ui/react'
import LowerNavbar from './LowerNavbar';

const Navbar = () => {

    let navigate = useNavigate();
    let navigaterhandler = (location)=>{
        navigate(location);
    }
    let searchRef = useRef();
   
   
    const handlesearch = (e)=>{
        let  value = e.target.value;
        if(value === "boy"){
            navigate("/products/boys-clothes")
        }else if(value === "girl"){
            navigate("products/girls-clothes")
        }else if(value === "footwear"){
            navigate("/products/Footwear")
        }
    }
    let [isLoading, setLoading] = useState(false);
   
    let handlelogout = ()=>{
        setLoading(true);
      
       setTimeout(()=>{
            setLoading(false);
       },3000)
    }

  return (
   <>
     <div style={{width:"100%", margin:'7px 0px'}} className="allcontainer">
            <div className='leftsidecontnav'>
                <img onClick={()=>{navigate("/")}} src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"></img>
                <div style={{marginLeft:"20px", width:'338px'}}>  <Input ref={searchRef} variant='outline' size="sm" placeholder='Search for a Category, Brand or Product' onChange={handlesearch}/></div>
            </div>
            <div className='rightsidecontnav'>
                  <p>Stores & Preschools  |</p>
                  <p>Support | </p>
                  <p>Track Order | </p>
                  <p>FirstCry Parenting | </p>
                 
                 <Link to="/">  <p onClick={()=>{navigaterhandler("/login")}} style={{cursor:"pointer"}}>Login | </p></Link>
                 
                 
                  <p onClick={()=>{navigaterhandler("/cart")} } style={{cursor:"pointer"}}>Cart</p>
            </div>
           
        </div>
        <LowerNavbar/>
   </>
  )
}

export default Navbar
