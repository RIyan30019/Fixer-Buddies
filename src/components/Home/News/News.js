import React from 'react';
import blog1 from '../../../img/blog1.jpg'
import blog2 from '../../../img/blog2.jpg'
import blog3 from '../../../img/blog3.jpg'
import SingleNews from '../SingleNews/SingleNews';

const News = () => {
    const newsData = [
        {
            title: 'How To Quickly Remove Virus From Laptop',
            description: 'In this case you can try re-seating memory modules to make sure they are making good contact with the slot.',
            image: blog1
        },
        {
            title: 'Why You Need To Backup Your Data Regularly?',
            description: 'In this case you can try re-seating memory modules to make sure they are making good contact with the slot.',
            image: blog2
        },
        {
            title: 'Useful Tips For Buying A Used Components',
            description: 'In this case you can try re-seating memory modules to make sure they are making good contact with the slot.',
            image: blog3
        }
    ]
    return (
        <section className="p-4">
            <div>
                <div className='text-center text-muted'>
                    <h2 className='fw-bold fs-1'>Latest News</h2>
                    <hr className='text-center mx-auto' style={{ width: '40px', height: '6px', color: 'orange' }} />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sit.
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row pb-3">
                    {
                        newsData.map(news =>  <SingleNews news={news} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default News;