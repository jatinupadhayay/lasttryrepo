import React from 'react';
import { MdCamera, MdCameraAlt, MdGamepad, MdHeadphones, MdLaptop, MdPhone, MdPhoneAndroid, MdVideogameAsset, MdWatch } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { LiaTvSolid } from "react-icons/lia";
const Card = ({name, icon}) => {
  return (
     <div className='flex flex-col items-center border gap-2 w-32 p-4 rounded-md hover:bg-red-500 hover:text-white'>
     {icon}
      <p className='text-sm'>{name}</p>
     </div>
  )
}
const PopularSearch = () => {
  return (
    <section className="p-4 flex flex-col gap-4">
      <h2 className='font-bold text-lg'>Most Popular Search</h2>
      <div className="flex gap-16">
         <Link to="./products/category/Smartphones"><Card name={"Smartphones"} icon={<MdPhoneAndroid size={40} />}/></Link>
         <Link to="./products/category/Laptops"><Card  name={"Computers"} icon={<MdLaptop size={40} />}/></Link>
         <Link to="./products/category/TV"><Card name={"TV"} icon={<LiaTvSolid size={40} />}/></Link>
         <Link to="./products/category/Camera"><Card name={"Camera"} icon={<MdCameraAlt size={40} />}/></Link>
         <Link to="./products/category/Headphones"><Card name={"Headphones"} icon={<MdHeadphones size={40} />}/></Link>
         <Link to="./products/category/Shoes"><Card name={"Shoes"} icon={<MdVideogameAsset size={40} />}/></Link>
      </div>
    </section>
  );
};

export default PopularSearch;
