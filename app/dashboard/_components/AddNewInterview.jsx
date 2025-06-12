"use client"
import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { useRouter } from 'next/navigation';

const AddNewInterview = () => {
    const [openDailog, setOpenDailog] = useState(false)
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const[JsonResponse,setJsonResponse]=useState([]);
    const{user}=useUser();
    const router=useRouter()

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        console.log(jobPosition, jobDesc, jobExperience);

        const InputPrompt = "Job possition:" + jobPosition + ",Job Description:" + jobDesc + ",Years of Experience" + jobExperience + ",Depends on Job possition , job description & year of experience give me" + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview question along with Answer in JSON format,Give us question and answer field on JSON"

        const result = await chatSession.sendMessage(InputPrompt)

        const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '')
        if(MockJsonResp){
        const resp=await db.insert(MockInterview)
        .values({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResp,
            jobPosition:jobPosition,
            jobDesc:jobDesc,
            jobExperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-YYYY')

        }).returning({mockId:MockInterview.mockId})

        console.log("Inserted id",resp);
        if(resp){
            setOpenDailog(false);
            router.push('/dashboard/interview/'+resp[0].mockId)
        }
    }else{
        console.log("Error");
        
    }
        

        //console.log(JSON.parse(MockJsonResp))
        setJsonResponse(MockJsonResp)
        setLoading(false);
    }
    return (
        <div>
            <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
                onClick={() => setOpenDailog(true)}
            >
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDailog}>

                <DialogContent className='max-w-2xl'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Tell us more about your job interviwing</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2 className='text-xs font-bold'>Add Details about your job possition/role,Job sescription and years of experience</h2>
                                    <div className='mt-7 my-3'>
                                        <label>Job Role/Job Possition</label>
                                        <Input placeholder="Ex.Full Stack Developert" required
                                            onChange={(e) => setJobPosition(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label>Job Description/ Tech Stack (In Short)</label>
                                        <Textarea placeholder="Ex.React,Anugular,NodeJs etc" required
                                            onChange={(e) => setJobDesc(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label>Years of Experience</label>
                                        <Input placeholder="Ex.5" type="number" max="50" required
                                            onChange={(e) => setJobExperience(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end'>
                                    <Button type="button" className='bg-white text-black hover:text-white' onClick={() => setOpenDailog(false)}>Cancel</Button>
                                    <Button type="submit" disabled={loading}
                                    >{loading ?
                                        <>
                                            <LoaderCircle className='animate-spin' />"Generating from AI"</>
                                        : "Start Interview"


                                        }
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview
