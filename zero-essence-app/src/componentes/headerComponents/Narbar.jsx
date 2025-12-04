
export const Narbar=(
  {text1,text2,text3,text4,comp,
  address1,address2,address3,address4})=>{
    return (
      <>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 
                 text-gray-600 font-medium w-full md:w-auto cursor-pointer">
            <li>
              <a href={address1} className="text-[#A38363] hover:text-[#d28d47] transition duration-200">
                {text1}
              </a>
            </li>
            <li>
              <a href={address2} className="hover:text-[#A38363] transition duration-200">
                {text2}
              </a>
            </li>
            <li>
              <a href={address3} className="hover:text-[#A38363] transition duration-200">
                {text3}
              </a>
            </li>
            <li>
              <a href={address4} className="hover:text-[#A38363] transition duration-200">
                {text4}
              </a>
            </li>
            <li>
              {comp}
            </li>
            
          </ul>
        </nav>
      </>
    );
}