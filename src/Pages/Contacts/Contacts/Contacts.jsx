import React from 'react';
import CoverBanner from '../../Shared/CoverBanner/CoverBanner';
import contactBanner from "../../../assets/contact/banner.jpg"
import ContactLocation from '../ContactLocation/ContactLocation';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../ContactForm/ContactForm';

const Contacts = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <CoverBanner bgImage={contactBanner} title="Contact Us"></CoverBanner>
            <ContactLocation />
            <ContactForm />
        </div>
    );
};

export default Contacts;