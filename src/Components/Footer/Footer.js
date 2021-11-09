import React from 'react';
import { useHistory } from 'react-router';

const Footer = () => {
    const history=useHistory();
    return (
        <div className="bg-dark bg-gradient py-3 text-center mt-3">
            <h2 className="text-white" onClick={()=>history.push('/home')} style={{cursor:'pointer'}}><span className="text-warning"> Tour Dé </span>Sylhet</h2>
            <h5 className="mt-0 py-0 text-warning">Bookmarks <span className="text-muted">your travelling plans</span></h5>
            <h3><i className="fab fa-google text-danger"></i>{'  '}<i className="fab fa-facebook text-white"></i>{'  '}<i className="fab fa-github text-success"></i>{'  '}<i className="fab fa-instagram-square text-warning"></i>{'  '}<i className="fab fa-twitter-square text-primary"></i></h3>
        </div>
    );
};

export default Footer;