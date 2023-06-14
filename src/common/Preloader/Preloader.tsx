import React from "react";
import Spinner from 'react-bootstrap/Spinner';


const Preloader: React.FC = () => {
    return    <div className='position-fixed z-3' style={{ left: "49%", top: "55% "}}>
        <Spinner animation="border" variant="secondary" />
    </div>

}
export default Preloader
