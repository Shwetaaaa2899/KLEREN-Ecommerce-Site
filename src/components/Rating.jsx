import {AiFillStar, AiOutlineStar} from "react-icons/ai"
// import {Array}
export const Rating = ({setRating, style,rating}) =>{
    // let rate =2;
    return <div  style = {{display:"flex"}}>
    {
        [...Array(5)].map((_,index) => <div >
        <span   key = {index}
        style = {style}
        onClick = {() => setRating(index)}>

{
    index  <= rating?
    <p>⭐</p>

:
<AiOutlineStar size = {25}/>

}
</span>
        </div>)
    }




    </div>
}
{/* <AiFillStar size = {25}/> */}