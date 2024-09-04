import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { useRouter } from 'next/navigation';

interface EventData {
	eventTitle: string;
	city: string;
	description: string;
	imageSrc: string;
}

const items = [
    {
     img: "/img/property/prop1.jpg",
     title: "Title: Modern Family Home",
     text: "Spacious 4-bed home near schools and parks.",
    },
    {
        img: "/img/property/prop2.jpg",
        title: "Title: Modern Family Home",
        text: "Spacious 4-bed home near schools and parks.",
    },
]
const items2 = [
    {
        img: "/img/property/prop3.jpg",
        title: "Title: Charming Suburban Retreat",
        text: "Cozy 3-bed suburban with garden.",
    },
    {
        img: "/img/property/prop4.jpg",
        title: "Title: Cozy Country Cottage",
        text: "Quaint 2-bed country cottage.",
    },
    {
        img: "/img/property/prop5.jpg",
        title: "Title: Elegant Beachfront Villa",
        text: "Elegant beachfront villa with pool.",
    },
]

const About = () => {
	const device = useDeviceDetect();
    const router = useRouter();
   
	if (device === 'mobile') {
		return <div>POPULAR DETAIL</div>;
	} else { 
		return (
            <section id={'choose-place'}>
				<Stack className={'container'}>
                    <p className='heading-normal-txt'>NEW PROPERTY ANNOUNCEMENTS</p>
                    <h2 className='headings'>PROPERTY <span>TOURS</span></h2>
					<Stack className={'choose-wrapper'}>
                        
                       {items.map(el => {
                        return <div className='img-left-side'>
                        <div className='card'>
                            <img src={el.img} alt="" />
                            <div className="layer"></div>
                            <div className="info">
                                <h1>{el.title}</h1>
                                <p>{el.text}</p>
                                <button onClick={() => router.push("/property")}>More details</button>
                            </div>
                        </div>
                    </div>
                       }) }
				    </Stack>
                    <br />
                    <Stack className='row-wise-img'>
                        {items2.map(el => {
                          return  <div className='card'>
                            <img src={el.img} alt="" />
                            <div className="layer"></div>
                            <div className="info">
                                <h1>{el.title}</h1>
                                <p>{el.text}</p>
                                <button onClick={() => router.push("/property")}>More details</button>
                            </div>
                        </div>
                        })}
                        </Stack>
			</Stack>
            </section>
		);
	}
};

export default About;
