import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import './carousel.css';

export const CustomCarrusel = () => {
    return (
        <Carousel className="card2">
            <Carousel.Item >
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <Image
                                src="/perrodestacado1.jpeg"
                                width={300}
                                height={242}
                                alt="Compañero disponible"
                                className="card-img-top img-fluid"
                            />
                            <div className="card-body">
                                <h5>Farruko</h5>
                                <p className="card-text">Descripción de Farruko.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <Image
                                src="/perrodestacado1.jpeg"
                                width={300}
                                height={242}
                                alt="Compañero disponible"
                                className="card-img-top img-fluid"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Farruko</h5>
                                <p className="card-text">Descripción de Farruko.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarrusel;