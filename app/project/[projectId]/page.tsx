import React from 'react'
import ProjectHeader from './_shared/projectheader'
import SettingSection from './_shared/settingsection'


const ProjectCanvasPlayground = async() => {
  return (
    <div className=''>
            <ProjectHeader />

            {/* settings */}
                <SettingSection />
        {/* Project canvas */}
    </div>
  )
}

export default ProjectCanvasPlayground