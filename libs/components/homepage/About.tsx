import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface EventData {
	eventTitle: string;
	city: string;
	description: string;
	imageSrc: string;
}

const About = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>ABOUT SECTION</div>;
	} else {
		return (
            <section id={'about'}>
				<Stack className={'container'}>
					<Stack className={'about-content-wrapper'}>
                        <Stack className='agency-left-side'>
                            
                            <p className='heading-normal-txt'>THE BEST REAL-ESTATE COMPANY</p>
                            <br></br>
                            <h2 className='headings'>DISCOVER THE <span>WORLD CLASS</span> HOUSES WITH US</h2>
                            <br></br>
                            <p className='lead'>Welcome to Hankang Real Estate Company, 
                                where your dream home is just a step away. 
                                We are a premier real estate firm dedicated to helping you find the perfect property 
                                that meets your needs and exceeds your expectations. Whether you are buying, selling, or renting, 
                                our experienced team of professionals is here to provide you with exceptional service and 
                                expert guidance every step of the way.
                            </p>
                            <br></br>
                            <p className='lead'>
                                Our mission is to make the process of buying, selling, and 
                                renting real estate as seamless and stress-free as possible. 
                                We strive to provide our clients with the highest level of service, 
                                ensuring that their experience with us is not only successful but also enjoyable.
                            </p>
                        </Stack>
                        <Stack className='agency-right-side'>
                        <div className='img'>
                            <img src="/img/property/sub1.png" alt="" />
                        </div>
                        </Stack>
				</Stack>
			</Stack>
            </section>
		);
	}
};

export default About;
