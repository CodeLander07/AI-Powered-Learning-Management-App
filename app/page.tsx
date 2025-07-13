import React from 'react'
import {Button} from '@/components/ui/button'
import CompanionCards from '@/components/CompanionCards'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'
import { getAllCompanions,getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'


const Page = async () => {
  const companion = await getAllCompanions({limit:3});
  const recentSessionsCompanions = await getRecentSessions();
  return (
    <main>
    <h1 className='text-2xl underline'>Popular Companion</h1>

    <section className='home-section'>
    {companion.map((companion)=>(
      <CompanionCards
      key={companion.id}
      {...companion}
      color={getSubjectColor(companion.subject)} />
      
    ))}
    
    
     

    </section>
    <section className='home-section'>
      <CompanionsList
      title="Recently Completed sessions"
      companions={recentSessionsCompanions}
      ClassNames="w-2/3 mx-lg:w-full"
      />
      <CTA/>
    </section>

    </main>
   
  )
}

export default Page