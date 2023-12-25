import './DestinationStyle.css';
import { Component } from 'react';


class DestinationData extends Component {
    render() {
        return (
            <>
                <div className='first-dec1'>
                    <div className='first-text'>
                        <h2> <b> Qutub Minar</b></h2>
                        <p>
                            The Qutab Minar was the first building constructed in the Indo-Islamic style. Its construction started during the reign of Qutb ud din Aibak, the founder of the Sultanate. It was later completed during the reign of Iltutmish. A tall tower and balconies projecting from it are the prominent features of this building.
                            <br /> <br /> <h3> How to Reach: </h3>

                            <ul>
                                <li>
                                    <b> <i class="fa-solid fa-plane-departure"></i> By Air: </b>
                                    Indira Gandhi International Airport is the closest airport to Qutub Minar at a distance of 13.8 km and will take 32 minutes to reach by road.
                                </li> <br />

                                <li>
                                    <b><i class="fa-solid fa-train"></i> By Train:</b>
                                    The closest railway station to Qutub Minar in Delhi is New Delhi Railway Station, which is about 17 km away. The Nizamuddin Railway Station is also about 15 km away.
                                </li> <br />

                                <li>
                                    <b> <i class="fa-solid fa-bus"></i> By Metro:</b>
                                    To reach Qutub Minar by metro, you can take the Delhi Metro's Yellow Line and get off at the Qutub Minar Metro Station. The station is located on Anuvart Marg, next to Mittal Garden. The adjoining stations are Chhatarpur and Saket.
                                </li>
                            </ul>

                        </p>
                    </div>
                    <div className='image1'>
                        <img alt='img' src="https://plus.unsplash.com/premium_photo-1697729438410-d53c666e3810?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <img alt='img' src="https://images.unsplash.com/photo-1663229203856-8a363f07d881?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
            </>
        )
    }
}




export default DestinationData;
