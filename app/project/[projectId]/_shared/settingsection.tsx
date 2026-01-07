'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { THEME_NAME_LIST, THEMES } from '@/data/themes'
import { ProjectType } from '@/types/types'
import { Camera, Share, Sparkle } from 'lucide-react'
import React, { use, useEffect } from 'react'

type Props = {
    projectDetails: ProjectType | undefined;
}

const SettingSection = ({projectDetails}:Props) => {

    const[selectedTheme, setSelectedTheme]=React.useState('SHOPIFY');
    const[projectName, setProjectName] = React.useState(projectDetails?.projectName||'');
    const[userNewScreenInput, setUserNewScreenInput]=React.useState<string>('');


    useEffect(()=>{
      projectDetails && setProjectName(projectDetails?.projectName||'');
    },[projectDetails]);

  return (
    <div className='w-[300px] h-[90vh] p-5 border-r'>
       <h2 className='font-medium text-lg'>Settings</h2>
       <div className='mt-3'>
        <h2 className='text-sm font-bold mb-1'>Project Name</h2>
        <Input type='text' value={projectName} onChange={(event)=>setProjectName(event.target.value)} placeholder='project Name'/>
       </div>
        <div className='mt-5'>
        <h2 className='text-sm font-bold mb-1'>Generate New Screen</h2>
        <Textarea onChange={(event)=>setUserNewScreenInput(event.target.value)} placeholder='Enter a prompt to generate screen with AI'/>
        <Button size='sm' className='mt-2 w-full'><Sparkle/> Generate with AI</Button>
       </div>
        <div className='mt-5'>
        <h2 className='text-sm font-bold mb-1'>Themes</h2>
            <div className='h-[220px] overflow-auto'>
                <div className=''>
                    {
                        THEME_NAME_LIST.map((theme,index)=>{
                            return (
                                <div className={`p-3 rounded-xl border mb-2 cursor-pointer
                                    ${theme===selectedTheme && `border-primary bg-primary/20`}
                                    `} key={index}
                                 onClick={()=>setSelectedTheme(theme)}
                                >
                                      <h3 className='mb-2'>{theme}</h3>
                                      <div className='flex gap-2'>
                                      <div className={`h-4 w-4 rounded-full`} style={{ backgroundColor: THEMES[theme].primary }} />
                                       <div className={`h-4 w-4 rounded-full`} style={{ backgroundColor: THEMES[theme].secondary }} />
                                        <div className={`h-4 w-4 rounded-full`} style={{ backgroundColor: THEMES[theme].accent }} />
                                         <div className={`h-4 w-4 rounded-full`} style={{ backgroundColor: THEMES[theme].background }} />
                                         <div className={`h-4 w-4 rounded-full`}
                                          style={{background:`linear-gradient(135deg, 
                                             ${THEMES[theme].background},
                                             ${THEMES[theme].primary},
                                             ${THEMES[theme].accent}
                                            )`}}
                                         />
                                      </div>
                                </div> 
                            )   
                        })
                        
                    }
                </div>
            </div>
       </div>
               <div className='mt-5'>
        <h2 className='text-sm mb-1'>Extras</h2>
        <div className='flex gap-3'>
        <Button size='sm' variant="outline" className='mt-2'><Camera/>Screenshot</Button>
        <Button size='sm' variant="outline" className='mt-2'><Share/>Share</Button>
        </div>
       </div>
    </div>
  )
}

export default SettingSection