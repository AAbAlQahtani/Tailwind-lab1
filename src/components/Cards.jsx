import React from 'react'

const categories = [
  {
    title: "Electronics",
    image: "https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png",
    items: ["TV Televisions", "Air Conditioners", "Washing Machines"],
  },
  {
    title: "Clothings",
    image: "https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png",
    items: ["Womens", "Mens", "Bags & Backpacks", "Accessories"],
  },
  {
    title: "Electronics",
    image: "https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png",
    items: ["TV Televisions", "Air Conditioners", "Washing Machines"],
  },
  {
    title: "Clothings",
    image: "https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png",
    items: ["Womens", "Mens", "Bags & Backpacks", "Accessories"],
  },
  {
    title: "Electronics",
    image: "https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png",
    items: ["TV Televisions", "Air Conditioners", "Washing Machines"],
  },
  {
    title: "Clothings",
    image: "https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png",
    items: ["Womens", "Mens", "Bags & Backpacks", "Accessories"],
  }

];

// export default function Cards() {
//   return (
//   <>
//   <div>
//     {
//         Cards.map((item)=>{
//             <div>
//                 <img src={item.img} alt="" />
//                 <h2>{item.name}</h2>
//                 <p>{item.info}</p>
//             </div>
//         })
//     }
//   </div>
//   </>
//   )
// }

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        
      {categories.map((item, index) => (
       
        <div key={index} className="flex border rounded-lg p-4 bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="w-40 h-40 mx-auto "
          />
          <div className='flex flex-col items-center justify-center mx-auto'>
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <ul className="text-sm text-gray-600">
            {item.items.map((subItem, i) => (
              <li key={i}>{subItem}</li>
            ))}
          </ul>
          </div>

          </div>
      ))}
    </div>
          

  );
}
