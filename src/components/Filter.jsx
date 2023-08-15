import {CartState} from "../context/productsContext"
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./css/filter.css"
import Slider from '@mui/material/Slider';

const Filter = () => {
  const { state :{all,genre,price,maximumPrice,minimumPrice,sort,categoryInput},getData, dispatch } = CartState()

console.log("sort is",sort)
  const setInputText = (e) =>{
    dispatch({type:"SEARCH",payload:e.target.value})
  }
  const showAllProducts = () => {
    // console.log("1st step")
    dispatch({type:"DISPLAY-ALL-PRODUCTS"})
  }
  const filterDataonCategory = (e) =>{
   

      dispatch({type:"CATEGORY",payload:e.target.value})
    
   
  }
  const filterDataonSort = (e) =>{
    console.log("data",e.target.value)
    dispatch({type:"SORT",payload:e.target.value}) 
  }
     const filterDataonCheck = (e) =>{
      dispatch({type:"GENRE",payload:e.target.value}) 
     }
      const  ClearFilterHandler = () => {
        dispatch({type:"CLEAR-FILTER"}) 
      }
      const sortByRange = (e) =>{
        const name = e.target.name;
        const value= e.target.value;
const payloadObj = {name,value}
        dispatch({type:"RANGE",payload:payloadObj }) 
      }
      function valuetext() {
        // return `${value}°C`;
      }
      
   
  return (
    <div  className="filter-div">
     <div className = "filter-heading"> 
      <h1>Filters:</h1>  
    </div>
    
    <div className="sort">
    <h3>Sort By Price</h3>
   
    <p  ><input
    
    className="input"
    type="radio"
    value="lowtohigh"
    name="category"
    onChange={filterDataonSort}
    checked = {sort?.length>0 && sort==="lowtohigh"?true:false}
  />  Sort(lowtohigh)</p>
  <p >
 <input  
          className="input"
       type="radio"
       name="category"
       value="hightolow"
       checked = {sort?.length>0 && sort==="hightolow"?true:false}
       onChange={filterDataonSort}
     />
     Sort(hightolow)
     </p>
    </div> 
   
     <div className="range">
    
     
    <h3>Sort By Range</h3>
    {/* <h4>Current Price: {price}</h4> */}
    <span>
   <span>
   Current Price: 
   {minimumPrice===0?300:minimumPrice} to {price}
   </span>  </span>
    <div   className = "input"> 
      <input    type = "range" name = "price" step = {10} min={300} max={maximumPrice} value={price} onChange = {(e)=>sortByRange(e)}/>
    
    <div className="rates">
    <span>{minimumPrice===0?300:minimumPrice}  </span>
    
    <span>{maximumPrice}</span>
    </div>
    </div> 
     </div>
   
    {/* <div   className = "input">
    <input  type="text"  placeholder = "search" onChange={(e) => sortByRange(e)} name="myInput"  />
    </div> */}
    <div className="category">
    <h3>Sort By Category</h3>
    <p><input
        type="radio"
        name = "gender"
        className="input"
        value="men"
        onChange={filterDataonCategory}
        checked = {categoryInput?.length>0 && categoryInput==="men"?true:false}
      />

      Men's Section</p>
      <p>

      <input
        type="radio"
        name = "gender"
        className="input"
        value="women"
         onChange={filterDataonCategory}
        checked = {categoryInput?.length>0 && categoryInput==="women"?true:false}
      />

      Women's Section
      </p>
      <p>
      <input
       type="radio"
        name = "gender"
        className="input"
        value="kids"
        onChange={filterDataonCategory}
        checked = {categoryInput?.length>0 && categoryInput==="kids"?true:false}
      />
      kid's Section
      </p>
    </div>
 
     
    {/* <div   className = "input">
      <input
        type="radio"
        name = "gender"
    value="all"
        onChange= {showAllProducts}
        checked = {all}
       
      />
     All
</div> */}

<div className="genre">
<h3>Genre</h3>
<p><input    
        type="checkbox"
        value="sports"
        name = "sports"
        className="input"
        onChange={(e) => filterDataonCheck(e)}
        checked ={genre?.includes("sports")?true:false}
      />
      Sport's Wear</p>
     <p> <input
        type="checkbox"
        value="formal"
        className="input"
        onChange={(e) => filterDataonCheck(e)}
        checked ={genre?.includes("formal")?true:false}
      />
   Formal Wear</p>
   <p> <input
        type="checkbox"
        className="input"
        value="casual"
    
        onChange={(e) => filterDataonCheck(e)}
        checked ={genre?.includes("casual")?true:false}
      />
 Casual Wear  </p>
</div>
     
      {/* checkbox category */}
   
 <button className="button" onClick = {ClearFilterHandler} >Clear Filter</button>
   </div>
  );
};
export default Filter;
