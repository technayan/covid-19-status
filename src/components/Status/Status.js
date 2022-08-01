import React from 'react';

const Status = ({status}) => {
    const { confirmed, recovered, deaths, lastUpdate } = status;
    const latestUpdate = new Date(lastUpdate).toDateString();
    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <h2 className='text-3xl font-bold mt-3 mb-6'>World Wide</h2>
                <div className='flex gap-5'>
                    <div className='bg-red-300 p-5 rounded-xl w-1/3'>
                        <h4 className='text-2xl mb-2 font-bold text-red-800'>Infected</h4>
                        <h2 className='text-4xl font-bold'>{confirmed.value}</h2>
                        <p className='mt-3'>{latestUpdate}</p>
                    </div>
                    <div className='bg-green-300 p-5 rounded-xl w-1/3'>
                        <h4 className='text-2xl mb-2 font-bold text-green-800'>Recovered</h4>
                        <h2 className='text-4xl font-bold'>{recovered.value}</h2>
                        <p className='mt-3'>{latestUpdate}</p>
                    </div>
                    <div className='bg-gray-300 p-5 rounded-xl w-1/3'>
                        <h4 className='text-2xl mb-2 font-bold text-gray-800'>Deaths</h4>
                        <h2 className='text-4xl font-bold'>{deaths.value}</h2>
                        <p className='mt-3'>{latestUpdate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;