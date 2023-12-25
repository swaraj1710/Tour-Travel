import './TripStyle.css'
import React from 'react'
import TripData from './TripData'
import TripDelhi from '../assets/Delhi1.jpg'
import TripKashmir from '../assets/tripKashmir.jpg'
import TripChennai from '../assets/tripChennai.jpg'
function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trip</h1>
            <p> You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                    image={TripDelhi}
                    heading="Trip in Delhi"
                    text="Delhi, the capital of India has a strong historical background. It was ruled by some of the most powerful emperors in Indian history. The history of the city is as old as the epic Mahabharata. The town was known as Indraprastha, where Pandavas used to live."
                />

                <TripData
                    image={TripKashmir}
                    heading="Trip in Kashmir"
                    text='Kashmir is often called “Paradise on Earth” due to its breathtaking pristine. The region is blessed with lush green valleys, snow-capped mountains, beautiful lakes, & picturesque landscapes that evoke a sense of paradise, making it a popular epithet for Kashmir.'
                />

                <TripData
                    image={TripChennai}
                    heading="Trip in Chennai"
                    text="Chennai is a culture-rich city with carnatic music, delicious food, serene beaches and popular temples. It is one of the most preferred tourist destinations in India. The city never fails to mesmerise its visitors as it offers a unique experience."
                />
            </div>
        </div>
    )
}
export default Trip;
