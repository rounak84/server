import './Css/main.css'
import Hero from '../Images/landing.jpg'
import { AiTwotoneStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { useNavigate } from 'react-router';

function Main() {

    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `menu`; 
        navigate(path);
      }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-mid-6 col-lg-6 lantext">
                        <div className="col1">
                            <div className="heading">
                                <h1>Lets Now Shop for</h1>
                                <h2>Neccessary...</h2>                                
                            </div>
                            <div className="para">
                                we are trusted ... you can buy your necessary product use your phone
                            </div>
                        </div>
                        <div className="btn-section">
                            <span>
                                <button onClick={routeChange} className="btn btn-danger">Shop Now</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-mid-6 col-lg-6">
                        <img src={Hero} alt="" className="heroimg" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="customer-info">
                    <div className="cutomer-info-item">
                        <h4 className='consumertext'>Active Users</h4>
                        <FaUsers size="1rem" />
                    </div>
                    <div className="customer-info-item lasttwo">
                        <span><TbMinusVertical size="1.6rem"/></span>
                    </div>
                    <div className="consumer-info-item lasttwo">
                        <h4 className="consumertext">Ratings</h4>

                        <div className="rating-info">
                            <div className="rating-info-item">
                            <AiTwotoneStar size="1rem" />
                            </div>
                            <div className="rating-info-item">
                            <p className='num last'>4.5</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Main;