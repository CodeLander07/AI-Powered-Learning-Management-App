import React from 'react'
import { getAllCompanions } from '@/lib/actions/companion.actions';
import CompanionCards from '@/components/CompanionCards';
import { getSubjectColor } from '@/lib/utils';
import { Search } from 'lucide-react';
import SearchInput from '@/components/SearchInput';
import SubjectFilters from '@/components/SubjectFilters';
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';


const CompanionLibrary = async ({searchParams}:SearchParams) => {

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject:'';
  const topic = filters.topic ? filters.topic:'';
  const companions = await getAllCompanions({subject, topic});  
  const user = await currentUser();
  if(!user ){
    redirect('/sign-in');
  }


  return (
      <main className='mb-16 mt-10'>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilters />
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCards
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
           
        </main>
  )
}

export default CompanionLibrary
