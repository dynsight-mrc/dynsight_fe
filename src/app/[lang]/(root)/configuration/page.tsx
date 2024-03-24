import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../../../api/auth/authOptions';
import { CustomSession, UserRole } from '../../types/session.type';
import { redirect } from 'next/navigation';

function Configuration() {
  
  return (
    <div>Configuration page</div>
  )
}

export default Configuration