import CompanionForm from '@/components/CompanionForm'
import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { newCompanionPermissions } from '@/lib/actions/companion.actions'
import Link from 'next/link'
import Image from 'next/image'


const page = async () => {
  const{userId} = await auth();
  if(!userId) redirect('/sign-in');
  const canCreateCompanion = await newCompanionPermissions();

  return (
  <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
    {canCreateCompanion ? (
      <article>
      <h1>Companion Builder</h1>
      <CompanionForm/>
      </article> 
      ):(
      
      <article className='companion-limit'>
        <Image src="/images/limit.svg" alt="Companion Limit Reached" width={360} height={230} />
        <div className="cta-badge">
          Upgrade your plan
        </div>
        <h1>You've Reached Your Limit</h1>
        <p className='text-center'>You have reached the limit of companions you can create. Upgrade your plan to create more companions.</p>
        <Link href="/subscription" className="btn-primary w-full justify-center" >Buy Premium</Link>
      </article>
    )}
      
      
  </main>
  )
}

export default page
