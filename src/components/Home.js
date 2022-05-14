import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Paper } from '@mui/material';
const Home = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <div className="home">
                <h1>What Is a Blockchain?</h1>
                <div style={{ width: "100vw" }}>
                    <Carousel
                        autoPlay="true"
                        interval={3000}
                        infiniteLoop="true"
                        showStatus="false"
                        showIndicators="false"
                        showArrows="false"
                        showThumbs="false"
                    >
                        <div className="intro-slide">
                            hared database that differs from a typical database in the way that it stores information
                        </div>
                        <div className="intro-slide">lockchains store data in blocks that are then linked together via cryptography</div>
                        <div className="intro-slide">As new data comes in, it is entered into a fresh block. Once the block is filled with data, it is chained onto the previous block, which makes the data chained together in chronological order</div>
                        <div className="intro-slide">Different types of information can be stored on a blockchain, but the most common use so far has been as a ledger for transactions. </div>
                        <div className="intro-slide">In Bitcoin's case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.</div>
                        <div className="intro-slide">Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.</div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default Home;