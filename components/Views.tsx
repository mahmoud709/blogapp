import { writeClient } from "@/sanity/lib/client";
import Ping from "./Ping";
import { BLOG_VIEWS_QUERY } from "@/sanity/lib/queries";
import { after } from 'next/server'

const Views = async ({id}:{id:string})=>{
    const {views:totalViews} = await writeClient.withConfig({useCdn:false}).fetch(BLOG_VIEWS_QUERY,{id});
   //  update number of blog views
   after(async()=>{
      await writeClient.patch(id).
      set({views:totalViews+1}).commit();
   });
   return (
      <div className="view-container">
         <div className="absolute -top-2 -right-2">
            <Ping/>
         </div>
         <div className="view-text">
            <span className="font-black">views :{totalViews}</span>
         </div>
      </div>
   );
}

export default Views;