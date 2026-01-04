'use client'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProjectHeader = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow'>
         <div className='flex gap-2 items-center'>
                <Image src="/logo.png" alt="company_logo" width={40} height={40} />
                <h3 className='text-xl font-semibold'>Framezy</h3>
                </div>
                <Button> <Save/> save</Button>
    </div>
  )
}

export default ProjectHeader