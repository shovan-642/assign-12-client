import React from 'react';
import useCamps from '../hooks/useCamps';
import CampCard from './shared/CampCard';

const AvailableCamps = () => {
    const [camps] = useCamps()

    return (
        <div>
            <div className='grid grid-cols-4 gap-3'>
            {
                camps.map((camp,idx)=>(
                    <CampCard key={idx} camp={camp}></CampCard>
                ))
            }
            </div>
        </div>
    );
};

export default AvailableCamps;