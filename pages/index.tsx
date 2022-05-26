
import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';



const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
     <p>Pagina de index</p>
     <Link href='/admin/usuarios'>
       <p className='cursor-pointer'>Ir a admin de usuarios</p>
     </Link>
    </div>
  );
};

export default Home;
