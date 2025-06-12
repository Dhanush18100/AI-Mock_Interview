import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


import React from 'react'

const InterviewItemCard = ({ interview }) => {
    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedback=()=>{
         router.push('/dashboard/interview/'+interview?.mockId+"/feedback")

    }


    return (
        <div className='border shadow-sm rounded-lg p-3'>
            <h2 className='font-bold text-blue-500'>{interview?.jobPosition}</h2>
            <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of experience</h2>
            <h2 className='text-xs text-gray-400'>Created At:{interview?.createdAt}</h2>
            <div className='flex justify-between mt-2 gap-2'>

                <Button onClick={onFeedback} size="sm" variant="outline" className='w-1/2'
                >Feebback</Button> 
                <Button onClick={onStart} size="sm" className='w-1/2'>Start</Button>
            </div>
        </div>

    )
}

export default InterviewItemCard
