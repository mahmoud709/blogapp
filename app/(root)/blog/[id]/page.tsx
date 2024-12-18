import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/Views";
import { formatDate } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { Suspense } from "react";

export const expermintal_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log(id);
  const { data: blog } = await sanityFetch({
    query: BLOG_BY_ID_QUERY,
    params: { id },
  });
  if (!blog) return <h2>Not Found This Blog Details</h2>;
  return (
    <>
      <section className="pink_container !min-h-[230px">
        <p className="tag">{formatDate(blog._createdAt)}</p>
        <h1 className="heading">{blog.title}</h1>
        <p className="sub-heading !max-w-5xl">{blog.description}</p>
      </section>

      <div className="space-y-5 mt-10">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center items-start justify-start gap-5">
            <div>
            <img
              src={blog?.image || ""}
              alt={blog?.title || ""}
              className="w-full h-auto rounded-xl"
            />
            </div>
            <div className="flex flex-col justify-start items-start gap-5">
              <div className="flex gap-3  items-center">
                <Image
                  src={blog?.author?.image || ""}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-full drop-shadow-lg"
                />
                <div>
                  <p className="text-20-medium">{blog?.author?.name}</p>
                  <p className="text-16-medium !text-black-300">
                    @{blog?.author?.username}
                  </p>
                </div>
              </div>
              <div className="category">
              <p className="category-tag">category : {blog?.category}</p>
              </div>
            </div>
        </div>

        <h3 className="text-30-bold">Blog Details</h3>
        {blog?.description ? (
          <article>{blog?.description}</article>
        ) : (
          <p className="no-result">No details provided</p>
        )}
      </div>
      <Suspense fallback={<Skeleton className="view-skeleton"/>}>
      <View id={id} />
      </Suspense>
    </>
  );
};

export default page;
