import { getServerSession } from 'next-auth';
import React from 'react'
import { CustomSession, UserRole } from '../types/session.type';
import { authOptions } from '../../api/auth/authOptions';
import { redirect } from 'next/navigation';

async function Layout({children}:{children:React.ReactNode}) {
  let session = await getServerSession(authOptions);
  let { user } = session as CustomSession;

  if (!session) {
    redirect("/signin");
  }
  if (user.permissions.role !== UserRole.CO) {
    throw new Error("not permitted");
  }
  return (
    <div className='h-full'>
        {children}

    </div>
  )
}

export default Layout