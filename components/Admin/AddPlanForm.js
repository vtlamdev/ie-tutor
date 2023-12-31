import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {showSuccessToast, showErrorToast} from '../Toast'
import { useRouter } from 'next/router';

const AddPlanForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [bgColor, setBgcolor] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            type,
            price,
            duration,
            bgColor,
        };

        let response = await axios.post(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/addplan`, body);

        if (response.status !== 200) {
            showErrorToast(response.data.message);
            return;
        }

        setShowForm(false);
        showSuccessToast('Add plan successfully, page will reload after 5s');
        setTimeout(() => {
            router.reload();
        }, 5000);
    };

    return (
        <>
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => setShowForm(!showForm)}
            >
                Add new plan
            </button>

            {showForm && (
                <>
                    <div className="fixed inset-0 z-20 flex items-center justify-center overflow-auto outline-none transition-all duration-200 focus:outline-none">
                        <div className="relative mx-auto my-6 w-auto max-w-3xl">
                            {/*content*/}
                            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                                    <h3 className="text-3xl font-semibold">
                                        Add new plan
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-6">
                                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                            <form
                                                className="space-y-6"
                                                action="#"
                                                method="POST"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="flex justify-between gap-2">
                                                    <div>
                                                        <label
                                                            htmlFor="type"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            Type
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="type"
                                                                name="type"
                                                                type="text"
                                                                autoComplete="type"
                                                                required
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                onChange={(e) => setType(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="price"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Price
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="price"
                                                            name="price"
                                                            type="price"
                                                            autoComplete="price"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setPrice(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="duration"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Duration
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="duration"
                                                            name="duration"
                                                            type="duration"
                                                            autoComplete="duration"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setDuration(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="bgColor"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Background color
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="bgColor"
                                                            name="bgColor"
                                                            type="bgColor"
                                                            autoComplete="bgColor"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setBgcolor(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                                    <button
                                        className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-10 bg-black opacity-25"></div>
                </>
            )}
        </>
    )
}

export default AddPlanForm