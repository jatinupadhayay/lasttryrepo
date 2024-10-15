import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
    const categories = {
        electronics: ['Headphones', 'TV', 'Fridge', 'Laptops', 'Smartphones', 'Camera'],
        clothing: ['Shirt', 'Jeans', 'Jacket', 'Shoes', 'Dress'],
        books: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography'],
        furniture: ['Sofa', 'Table', 'Chair', 'Bed', 'Wardrobe'],
        beauty: ['Lipstick', 'Foundation', 'Perfume', 'Lotion', 'Face Mask'],
      };

    const {category} = useParams("Category");
    
  return (
    <div className='h-32'>
        <p className='font-bold p-4 text-center text-2xl'>{category.toUpperCase()}</p>
        {
            categories[category].map(c => {
               return (
                    <p>{c}</p>

               )
            })
        }
    </div>
  )
}

export default Category