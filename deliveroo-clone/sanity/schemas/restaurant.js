import {defineField, defineType} from 'sanity'
import category from './category'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',	
      type: 'string',	
      title: 'Restaurant name', 
      validation: (Rule) => Rule.required(), 
    }, 
    
    {
      name: 'short_description',	
      type: 'string',	
      title: 'Short description', 
      validation: (Rule) => Rule.max(200), 
    }, 
    
    {
      name: 'image',	
      type: 'image',	
      title: 'Image of the restaurant', 
    }, 
    
    {
      name: 'lat',	
      type: 'number',	
      title: 'latitude of the restaurant', 
    }, 
    
    {
      name: 'long',	
      type: 'number',	
      title: 'longitude of the restaurant', 
    }, 
    {
      name: 'address',	
      type: 'string',	
      title: 'Restaurant address', 
      validation: (Rule) => Rule.required(), 
    }, 
    {
      name: 'rating',	
      type: 'number',	
      title: 'Enter rating for (1 - 5 stars)', 
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("please enter a Value between 1 and 5"),
    }, 
    {
      name: 'type',		
      title: 'Category', 
      validation: (Rule) => Rule.required(), 
      type:'reference',
      to:[{type:category}],
    }, 
    {
      name: 'dishes',	
      type: 'string',	
      title: 'Dishes', 
      of: [{type:'reference', to: [{ type:'dish'}] }],
    }, 

  ]
})
