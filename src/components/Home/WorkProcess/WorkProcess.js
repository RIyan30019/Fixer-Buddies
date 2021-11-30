import React from 'react';
import SingleWork from '../SingleWork/SingleWork';
import './WorkProcess.css'
import laptop from '../../../img/laptop.png'
import gear from '../../../img/settings.png'
import send from '../../../img/send.png'
import truck from '../../../img/delivery-truck.png'
const WorkProcess = () => {
    const workData = [
        {
            workName: 'Damage Device',
            description: 'No panic, Just relaxed when your device is need to be fixed.',
            icon: laptop
        },
        {
            workName: 'Send To Us',
            description: 'No panic, Just relaxed when your device is need to be fixed.',
            icon: send
        },
        {
            workName: 'Fast Fixing',
            description: 'No panic, Just relaxed when your device is need to be fixed.',
            icon: gear
        },
        {
            workName: 'Quick Return',
            description: 'No panic, Just relaxed when your device is need to be fixed.',
            icon: truck
        }
    ]
    return (
        <section className=' work pb-5'>
            <div className="py-5">
                <div className='text-center text-white'>
                    <h2 className='fw-bold fs-1'>Work Process</h2>
                    <hr className='text-center mx-auto' style={{ width: '40px', height: '6px', color: 'orange' }} />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sit.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row py-3">
                    {
                        workData.map(work => <SingleWork key={work.workName} work={work} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;