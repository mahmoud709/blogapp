import { auth, signIn } from '@/auth'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default async function Navbar() {
   const session = await auth();
   const { user } = session || {};
   console.log(user);
   return (
      <header className='py-4 px-2 bg-gray-50 rounded shadow-sm'>
         <nav className='flex justify-between items-center'>
            <Link href='/' className='text-xl '>Blog<span className='text-primary-700 font-bold'>App</span></Link>
            <div className="auth">
               {session && user != undefined ?
                  <div className='flex justify-between items-center gap-3'>
                     <Link href='' className='text-xl'>create</Link>
                     <Image
                        src={user?.image || ""}
                        alt='user-img'
                        width={32}
                        height={32}
                        className='rounded-full'
                     />
                  </div>
                  :
                  <button className='text-secondary px-4 py-2 text-xl rounded bg-primary-600 hover:bg-primary-700' onClick={async () => {
                     "use server"
                     await signIn("google")
                  }}>Login</button>
               }
            </div>
         </nav>
      </header >
   )
}
