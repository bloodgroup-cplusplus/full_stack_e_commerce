import { defineField, defineType } from "sanity"

export const product = {
    name:"product",
    title:"Products",
    type:"document",


    fields:[
        defineField({
            name:"name",
            title:"Name",
            type:"string"
        }),
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name"
            }
        },
        {
            name:"images",
            titleL:"Images",
            type:"array",
            of:[{type:"image"}]
        },
        {
            name:"categories",
            title:"Categories",
            type:"array",
            of:[{type:"string"}]

        },
        {
            name:"colors",
            title:"Colors",
            type:"array",
            of:[{type:"string"}]
        }
    ]




}
