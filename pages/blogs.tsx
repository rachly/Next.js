import { ThemeContext } from "@emotion/react";
import React, { useEffect, useState } from "react";
import SimpleAccordion, { IsimpleAccordionItem } from "../src/components/gen-ui/SimpleAccordion";
import IPost from "../src/components/tpes/IPosts";





 const Blogs=()=>{
    const [posts,setPosts]=useState<IPost[]>([]);
    useEffect(getPosts,[]);
    function getPosts(){
        const url='/api/posts';
        fetch(url).then(res=>res.json())
        .then(data=>setPosts(data))
    }
    const items:IsimpleAccordionItem []=posts.map(post=>{
        return {summery:post.subject,details:post.body}
    })      

    return( 
         <div>
           <h2>posts</h2>
           <SimpleAccordion items={items}/>
        </div>
    )
 }
 export default Blogs;