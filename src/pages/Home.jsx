import Filter from "../components/Filter"
import { useState } from "react"
import { useParams ,Link } from "react-router-dom"
export default function Home() {


    return <div style = {{marginTop:"100px",display:"flex"}} >
    <ul>
        <li>
        <Link to = {`/products/kids`}>
        <button >kids </button>
        </Link>
        </li>
        <li>
        <Link to = {`/products/men`}>
        <button >

        men</button>
         </Link>
        </li>
         <li>
        <Link to = {`/products/women`}>
        <button >women </button>
        </Link>
        </li>
        <li>
        <Link to = {`/products/general`}>
        <button >general </button>
        </Link>
        </li>
    </ul>
    </div>

}