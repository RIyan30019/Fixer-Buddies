import React from 'react';
import Team from '../Team/Team';

const OurTeam = () => {
    const TeamData = [
        {
            name: 'Salim Munoz',
            position: 'FOUNDER',
            imgLink: 'https://templates.bwlthemes.com/fixer_buddies/images/team_3.jpg'
        },
        {
            name: 'Aslam Shekh',
            position: 'CHIEF ENGINEER',
            imgLink: 'https://templates.bwlthemes.com/fixer_buddies/images/team_2.jpg'
        },
        {
            name: 'Jamal Ahsan',
            position: 'OFFICE MANAGER',
            imgLink: 'https://templates.bwlthemes.com/fixer_buddies/images/team_4.jpg'
        },
        {
            name: 'Lisan Bumon',
            position: 'TECHNICAL MANAGER',
            imgLink: 'https://templates.bwlthemes.com/fixer_buddies/images/team_1.jpg'
        },
    ]
    return (
        <section className='bg-light py-5'>
                <div className="py-5">
                    <div className='text-center text-muted'>
                        <h2 className='fw-bold fs-1'>Repair Experts</h2>
                        <hr className='text-center mx-auto' style={{ width: '40px', height: '6px', color: 'orange' }} />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sit.
                    </p>
                    </div>
                </div>
                <div className="container pb-5">
                    <div className="row">
                        {
                            TeamData.map(team => <Team key={team.name} team={team} />)
                        }
                    </div>
                </div>
        </section>
    );
};

export default OurTeam;