import React from 'react';

const Contact = () => {
    return (
        <section className="py-5" style={{backgroundColor: '#FFCE54'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="fw-bold">Do you have any question? Feel free to contact.</h3>
                        <p className="text-muted">Bring your valuable desktop, laptop, Macbook, tab or gaming pc. We will happy to serve our best to you.</p>
                    </div>
                    <div className="col-md-4 p-3 text-center">
                        <button className="btn btn-dark fs-5 text-uppercase">Contact with us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;