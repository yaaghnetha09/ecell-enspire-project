
import {Link} from 'react-router-dom'
import Image from '../images/ensp.jpeg'

const Header = () => {
    return (
        <header className="main_header">
            <div className="container main_header-container">
                <div className="main_header-left">
                    <h4>IIIT Lucknow</h4>
                    <h1>Enspire</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Unde, aliquam! Hic sit minus molestiae veritatis quidem aspernatur.
                    </p>
                    <Link to="/events" className='btn lg'> Join our Events!</Link>
                </div>
                <div className='main_header-right'>
                    <div className='main_header-circle'></div>
                    <div className='main_header-image'>
                        <img src="{Image}" alt="Main Header Image" />
                    </div>
                </div>
            </div >
        </header>
    )
}

export default MainHeader