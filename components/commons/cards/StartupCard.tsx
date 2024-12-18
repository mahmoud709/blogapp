import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type authorType = { name: string, _id: string }
type PostType = {
   _createdAt: string,
   author: authorType;
   views: number;
   _id: number;
   description: string;
   image: string;
   category: string;
   title: string;
};

interface StartupCardProps {
   post: PostType;
}

export default function StartupCard({ post }: StartupCardProps) {
   return (
      <li className="startup-card group cursor-pointer">
         <Link href={`/blog/${post?._id}`}>
            <div className="flex-between">
               <div className="flex-between">
                  <p className="startup_card_date bg-primary-50 rounded p-2">{formatDate(post._createdAt)}</p>
               </div>
               <div className="flex gap-1.5">
                  <EyeIcon className="size-6 text-red-700" />
                  <span>{post.views}</span>
               </div>
            </div>
            <div className="flex-between mt-5 gap-5">
               <div className="flex-1">
                  <p className="text-16-medimm line-clamp-1">{post?.author?.name}</p>
                  <h3 className="text-26-semibold mt-3">{post?.title}</h3>
                  <p className="startup-card_desc">{post?.description}</p>
               </div>
            </div>
            <div className="blog-image">
               <Image
                  src={post.image}
                  className="w-full rounded-md"
                  alt={post.title}
                  width={150}
                  height={150}
               />
            </div>
            <div className="flex-between gap-3 mt-5">
               <p className="text-16-medium">{post.category}</p>
               <button className="startup-card_btn">
                  <Link className="capitalize" href={`/blog/${post._id}`}>
                     details
                  </Link>
               </button>
            </div>
         </Link>
      </li>
   )
}
