
// "use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {cn} from "@/lib/utils"
// import { Link } from "lucide-react";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { getSubjectColor } from "@/lib/utils";


interface CompanionListProps {
  title: string;  
  companions?: Companion[];
  ClassNames?: string;
}

const CompanionsList = ({title,companions,ClassNames}:CompanionListProps) => {
  return (
  <article className={cn('companion-list', ClassNames)}>
    <h2 className="font-bold text-3xl">{title}</h2>
  <Table>
  <TableHeader>
    <TableRow>

      <TableHead className="text-lg w-2/3">Lessons</TableHead>
      <TableHead className="text-lg">Subject</TableHead>
      <TableHead className="text-lg text-right">Duration</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>

    {companions?.map(({id,subject,name,topic,duration}) => (
      <TableRow key={id}>
        <TableCell>
        <Link href={`/companions/${id}`} >
        <div className="flex items-center gap-2">
          <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor:getSubjectColor(subject)}} >
            <Image src={`/icons/${subject}.svg`} 
          alt={subject}
          height={35}
          width={35}
          />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">{name}</p>
            <p className="text-lg">{subject}</p>
          </div>
          
        </div>
        </Link>
        </TableCell>

        <TableCell>
          <div className="subject-badge w-fit max-md:hidden">
            {subject}
            </div>
            <div className="flex item-center justify-center rounded-lg w-fit p-2 md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
              <Image src={`/icons/${subject}.svg`}
          alt={subject}
          height={20}
          width={20} />
            </div>

          </TableCell>

        <TableCell className="text-right">
          <div className="flex items-center justify-end gap-2">
            <p className="text-2xl">{duration}</p>
            <span className="max-md:hidden">mins</span>
            <Image src="/icons/clock.svg" 
            className="md:hidden"
            alt="clock"
            width={18}
            height={18} />
          
          </div>
          </TableCell>
      </TableRow>
    ))}
   
  </TableBody>
</Table>
  </article>
  )
}

export default CompanionsList
