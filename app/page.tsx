import React from 'react'
import {Button} from '@/components/ui/button'
import CompanionCards from '@/components/CompanionCards'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'
import { getAllCompanions,getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'


const Page = async () => {
    const companions = await getAllCompanions({ limit: 4 });
    const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main className="mb-18">
      <h1>Popular Companions</h1>

        <section className="home-section">
            {companions.map((companion) => (
                <CompanionCards
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>

        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                ClassNames="w-2/3 max-lg:w-full"
                companions={recentSessions}
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page