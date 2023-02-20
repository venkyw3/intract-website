import React, {useEffect} from 'react'
import IntractAttribution from '@intract/attribution'


const Tracking = () => {

    useEffect(() => {
		IntractAttribution('6388772a9cb5423125fcb35a', {
            loggerLevel: 1
        })
	}, [])

    return (
        <div>
            
        </div>
    )
}

export default Tracking