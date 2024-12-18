import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
        name:"slug",
        type:"slug",
        options:{
            source:"title"
        },
    }),
    defineField({
        name:'author',
        type:'reference',
        to:{type:'author'},
    }),
    defineField({
        name:"views",
        type:"number",
    }),
    defineField({
        name:"description",
        type:"text",
    }),
    defineField({
        name:"image",
        type:"url",
        validation:(Rule)=>Rule.required().error("Image is required"),
    }),
    defineField({
        name:"category",
        type:"string",
        validation:(Rule)=>Rule.min(3).max(50).required().error("Category is required"),
    }),
    defineField({
        name: "pitch",
        type: "markdown",
      }),  
  ],
});
