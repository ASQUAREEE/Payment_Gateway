import React, { useState } from 'react'
import { useTheme } from 'next-themes'

// import images from '../../assets'
import Image from 'next/image'
// import FooterLinks from './helper/FooterLinks'
// import Button from './helper/Button'
import { api } from '~/utils/api'

const Footer = () => {
  
  const {theme} = useTheme();
  const [inputEmail, setInputEmail] = useState('');

  // const createEmail = api.email.create.useMutation();

	const submitLeadEmail = (email: string) => {
		// createEmail.mutate({
		// 	email,
		// });

		// setInputEmail('');
    console.log("hello!");
	};

 
  return (
    <footer className='flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16'>

      <div className='w-full minwd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16'>

         <div className='flexStart flex-1 flex-col '>



       <div className='flexCenter cursor-pointer'>
       <Image
              src={"/logo02.webp"}
              alt="logo"
              objectFit="contain"
              width={256}
              height={1}
              className={theme === "light" ? "" : theme === 'dark' ? "filter invert" : undefined}
            />
       </div>
             <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6'>Get the latest Updates</p>

             <div className='flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md'>
              <input type="email" placeholder='Your Email' className='h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none'
              value={inputEmail}
              onChange={e => {
                setInputEmail(e.target.value);
              }}

              />

            <div className='flex-initial'>
 
             {/* <Button btnName='Email me' classStyles='rounded-md' handleClick={()=>{submitLeadEmail(inputEmail);}} /> */}

            </div>
            </div>
             </div>
          
          <div className='flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8'>
{/* 
          <FooterLinks heading="Davinchi.io" items={['Explore','How it works','Contact Us']} />

          <FooterLinks heading="Support" items={['Center','Terms of services','Legal','Privacy policy']} /> */}

 

      </div>

      </div>
 
     <div className='flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16'>

      <div className='flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7'>
        <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-base'>Davinchi.io, Inc. All Rights Reserved.</p>

        <div className='flex flex-row sm:mt-4'>

        {/* {[images.instagram,images.twitter,images.telegram,images.discord].map((image,index)=>{

return (
  <div className='mx-2 cursor-pointer' key={index}>
    <Image
    src={image}
    alt='social media icon'
    objectFit='contain'
    width={24}
    height={24}
    className={theme === 'light' ? 'filter invert' : ''}
    />
  </div>
)

})} */}

        </div>

      </div>

     </div>

     </footer> 
  )
}

export default Footer