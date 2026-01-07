'use client'
import React, { use, useEffect, useState } from 'react'
import ProjectHeader from './_shared/projectheader'
import SettingSection from './_shared/settingsection'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { ProjectType, ScreenConfigType } from '@/types/types'
import { Loader } from 'lucide-react'


const ProjectCanvasPlayground = () => {

    const {projectId} =  useParams(); 
    const [projectDetails, setProjectDetails] = useState<ProjectType>();
    const[loading, setLoading]=useState(false);
    const[screenConfigs, setScreenConfigs]=useState<ScreenConfigType[]>([]  );
    const[loadingMsg, setLoadingMsg]=useState('Loading');

    const getProjectDetails = async()=>{
        setLoading(true);
        setLoadingMsg('Fetching project detail...');
        const res = await axios.get(`/api/project?projectId=${projectId}`);

        console.log("Project details", res?.data);
        setProjectDetails(res?.data?.projectDetail);
        setScreenConfigs(res?.data?.screenConfig);
        // if(res?.data?.screenConfig.length===0){
        //     generateScreenConfigWithAI();
        // }
        setLoading(false);
    }

    useEffect(()=>{
       projectId && getProjectDetails();
    },[projectId]);


    useEffect(()=>{
        if(projectDetails&&screenConfigs&&screenConfigs.length===0){
            generateScreenConfigWithAI();
        }
    },[projectDetails&&screenConfigs]); 


        const generateScreenConfigWithAI=async()=>{
            setLoading(true);
            setLoadingMsg('Generating screen configuration with AI...');
            const result = await axios.post('/api/generate-config',{
                projectId: projectId,
                device: projectDetails?.device,
                userInput: projectDetails?.userInput
            });
            console.log("Generated screen config", result?.data);

            getProjectDetails();
            setLoading(false);
    }

  return (
    <div className=''>
            <ProjectHeader />

            <div>
               {
                loading && (
                    <div className='absolute left-1/2 top-20 flex gap-2 flex-col items-center justify-center h-[80%]'>
                        
                        <Loader className='animate-spin'/>
                        <h2 className='mt-2'>{loadingMsg}</h2>
                    </div>
                )}


            </div>

            {/* settings */}
                <SettingSection projectDetails={projectDetails} />
        {/* Project canvas */}
    </div>
  )
}

export default ProjectCanvasPlayground