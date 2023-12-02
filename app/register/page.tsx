'use client'

import Input from '@/components/input/Input'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface initialStateProps {
    name: string,
    email: string,
    password: string
}

const initialState:initialStateProps = {
    name: '',
    email: '',
    password: ''
}

export default function page() {
    const [state,  setState] = useState(initialState)
    const router = useRouter();

    function handleChange(e:any){
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e:FormEvent) => {
        e.preventDefault();

        try{
            const response = await axios.post('/api/register', state)

            toast.success('Registration successful!');
            router.push('/login')
        }
        catch(error){
            toast.error('Registration failed. Please try again.');
        }
    }

  return (
    <div className="min-h-screen mx-auto max-w-xl w-full flex flex-col gap-y-5 justify-center items-center">
        <h1 className='text-2xl font-[500] text-slate-500'>Registration</h1>
        <form className='text-center flex flex-col gap-y-2 w-full' onSubmit={onSubmit}>
            <Input placeholder='Name' name='name' id='name' type='text' onChange={handleChange} value={state.name}/>
            <Input placeholder='Email' name='email' id='email' type='email' onChange={handleChange} value={state.email}/>
            <Input placeholder='Password' name='password' id='password' type='password' onChange={handleChange} value={state.password}/>
            <button type='submit' className='bg-slate-950 py-2.5 rounded-md text-zinc-300'>Register</button>
            <div className="">
                Do you have an account ? <Link href='/login'>Sign in</Link>
            </div>
        </form>
    <ToastContainer />
    </div>
  )
}
