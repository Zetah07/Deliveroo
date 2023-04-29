import {defineField, defineType} from 'sanity'
import category from './category'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',	
      type: 'string',	
      title: 'Restaurant name', 
    }), 
    
    defineField({
      name: 'short_description',	
      type: 'string',	
      title: 'Short description', 
      validation: (Rule) => Rule.max(200), 
    }), 
    
    defineField({
      name: 'image',	
      type: 'image',	
      title: 'Image of the restaurant', 
    }), 
    
    defineField({
      name: 'lat',	
      type: 'number',	
      title: 'latitude of the restaurant', 
    }), 
    
    defineField({
      name: 'long',	
      type: 'number',	
      title: 'longitude of the restaurant', 
    }), 

    defineField({
      name: 'address',	
      type: 'string',	
      title: 'Restaurant address', 
      validation: (Rule) => Rule.required(), 
    }),
    
    defineField({
      name: 'rating',	
      type: 'number',	
      title: 'Enter rating for (1 - 5 stars)', 
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("please enter a Value between 1 and 5"),
    }), 
    
    defineField({
      name: 'type',		
      title: 'Category', 
      validation: (Rule) => Rule.required(), 
      type:'reference',
      to:[{type:'category'}],
    }), 
    
    defineField({
      name: 'dishes',
      type: 'array', 
      title: 'Dishes', 
      of: [{
        type:'reference', to: [{ 
          type:'dish'
        }] 
      }],
    }), 

  ]
})
