
import './DestinationStyle.css';


const Destination = () => {
    return (
        <>
            <br />
            <div className='Destination'>
                <h1>Popular Destinations</h1>
                <p>
                    Tours give you the opportunity to see a lot, within a time frame.
                </p>
               
                
                <div className='first-dec'>
                    <div className='first-text'>
                        <h2> <b> Taj Mahal</b></h2>
                        <p> The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.
                            <br /> <br /> <h3> How to Reach: </h3>

                            <ul>
                                <li>
                                     <b> <i class="fa-solid fa-plane-departure"></i> By Air: </b>
                                    It takes 12 minutes to travel from Taj Mahal to Kheria Airport. There is a distance of 10 km between the Taj Mahal and the Kheria Airport.
                                </li> <br/>

                                <li>
                                    <b><i class="fa-solid fa-train"></i> By Train:</b>
                                    There is a good network of trains connecting Agra with the rest of the country. Apart from the main railway station of Agra Cantonment, there are other two stations also, that of Raja-ki-Mandi and Agra Fort. The main trains connecting Agra with Delhi are Palace on Wheels, Shatabdi, Rajdhani, and Taj Express.
                                </li> <br/>

                                <li>
                                    <b> <i class="fa-solid fa-bus"></i> By Road:</b>
                                    There are regular bus services from Agra to a number of important cities. The main bus stands of Idgah and ISBT has a number of buses running for Delhi, Jaipur, Mathura, Fatehpur-Sikri, etc. if you are coming from Delhi to Agra. you can hire Delhi to Agra Taxi on specail discounts.
                                </li>
                            </ul>

                        </p>
                    </div>
                    <div className='image1'>
                        <img alt='img' src="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <img alt='img' src="https://images.unsplash.com/photo-1540248925259-92984576b034?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default Destination;
