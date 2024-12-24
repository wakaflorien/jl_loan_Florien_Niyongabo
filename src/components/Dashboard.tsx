import React, { FC } from 'react'
import { UserInterface } from '../App.types'

const Dashboard: FC = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if (isLoggedIn === 'false') {
        return window.location.href = '/';
    }
    return (
        <div className='h-full flex'>
            <section className='w-fit flex flex-col justify-between text-teal-900 border-r border-teal-950 p-2'>
                <header className='flex items-center justify-between px-4 py-2'>
                    <h1 className='text-lg font-semibold cursor-pointer'>JL </h1>
                </header>
                <nav className='flex flex-col gap-4 cursor-pointer'>
                    <a href='#' className='text-center text-sm'>Profile</a>
                    <button className='text-center text-sm' onClick={() => {
                        localStorage.removeItem('loggedUser')
                        localStorage.removeItem('registeredUser')
                        window.location.href = '/'
                    }}>Logout</button>
                </nav>
            </section>
            <section className='flex flex-col w-full divide-y-2'>
                <header className='w-full flex items-start justify-center px-4 py-12'>
                    <h1 className='text-3xl font-normal text-teal-900 cursor-pointer'>JL Loan Management System </h1>
                </header>
                {/* Loan request form for end users  */}
                <div>
                    <section className="h-full flex items-center justify-center">
                        <div className="flex flex-col gap-4 px-20 py-12 w-[500px]">
                            <h1 className="text-center text-md lg:text-xl font-normal text-teal-900">Fill in this form to request loan</h1>
                            <form className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="amount" className="space-y-1">
                                        <span className="font-semibold text-teal-900">Loan Amount</span>
                                        <input type="number" id="amount" className="form-input" min={3000} />
                                    </label>
                                    <label htmlFor="income" className="space-y-1">
                                        <span className="font-semibold text-teal-900">Montly Income</span>
                                        <input type="number" id="income" className="form-input" min={10000} />
                                    </label>
                                </div>
                                <button type="submit" name="request" className="form-button">Request</button>
                            </form>
                        </div>
                    </section>
                </div>

                {/* Manage load as an Admin
                {/* <div>
                    <section className="h-full flex flex-col items-center justify-center">
                        <header className='flex flex-col'>
                            <h1 className="text-center text-md lg:text-xl font-normal text-teal-900">Available users </h1>
                        </header>
                        <div className=''>
                            <table className='p-4 border '>
                                <th>Names</th>
                                <th>phone</th>
                                <th>Loan status </th>
                                <th>Loan Amount </th> 
                                <th> Action </th> 
                                <tbody className='p-4 border text-center'>
                                    <td>FLorien Niyongabo</td>
                                    <td>079837648643</td>
                                    <td>None</td>
                                    <td>0</td>
                                    <td>hdhd</td>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div> */}
            </section>
        </div>
    )
}

export default Dashboard