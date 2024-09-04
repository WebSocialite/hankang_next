import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';



const PropertyGallery = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>PROPERTY GALLERY </div>;
	} else {
		return (
            <Stack className='wrapper'>
                <div className='container'>
                    <input type="radio" name="slide" id='c1' defaultChecked />
                    <label htmlFor="c1" className='card'>
                    <img src="/img/property/prop4.jpg" alt="PROPERTY" />
                        <div className="row">
                            <div className='icon'>1</div>
                            <div className="description">
                                <h4>Property1</h4>
                                <p>bbbbbbbbbbbbbbbbbbbbbbb</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id='c2'  />
                    <label htmlFor="c2" className='card'>
                        <div className="row">
                        <div className='icon'>2</div>
                            <div className="description">
                                <h4>Property2</h4>
                                <p>aaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id='c3'  />
                    <label htmlFor="c3" className='card'>
                        <div className="row">
                        <div className='icon'>3</div>
                            <div className="description">
                                <h4>Property3</h4>
                                <p>cccccccccccccccccccccccccc</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id='c4'  />
                    
                    <label htmlFor="c4" className='card'>
                        <div className="row">
                        <div className='icon'>4</div>
                            <div className="description">
                                <h4>Property4</h4>
                                <p>dddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </label>
                </div>
            </Stack>
		);
	}
};

export default PropertyGallery;
