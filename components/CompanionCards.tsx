"use client";

import Link from "next/link";
import Image from "next/image";
interface CompanionCardsProps {
  id: string; 
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCards = ({id,name,topic,subject,duration,color} : CompanionCardsProps) => {
  return (
    <article className="companion-card " style={{backgroundColor:color}}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image 
          src="/icons/bookmark.svg" 
          alt="bookmark" 
          width={12.5} 
          height={15} />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex item-center gap-2">
        <Image 
          src="/icons/clock.svg" 
          alt="subject" 
          width={13.5} 
          height={15} />
        <p className="text-sm">{duration} minutes</p>
      </div>
      <Link 
      href={`/companion/${id}`} 
      className="w-full"
      >
        <button className="btn-primary w-full justify-center">Launch lesson</button>
        </Link>
    </article>
  )
}

export default CompanionCards
