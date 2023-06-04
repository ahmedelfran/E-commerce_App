import {React , useState , useEffect} from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'reactstrap';



// =================== Data ========================
import products from '../assets/data/products';
// =================== Data ========================

// =================== pages ========================
import Helmet from '../components/Helmet/Helmet';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
// =================== pages ========================

// =================== img ========================
import heroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png'
// =================== img ========================








const Home = () => {
    const year = new Date().getFullYear();

    const [trendingProducts , setTrendingProducts] = useState([]);
    const [bestSalesProducts , setBestSalesProducts] = useState([]);
    const [mobileProducts , setMobileProducts] = useState([]);
    const [wirelessProducts , setWirelessProducts] = useState([]);
    const [popularProducts , setPopularProducts] = useState([]);

    useEffect(()=> {
        const filteredTrendingProducts = products.filter ((item)=> item.category === "chair" );
        setTrendingProducts(filteredTrendingProducts);

        const filteredBestSalesProducts = products.filter ((item)=> item.category === "sofa" );
        setBestSalesProducts(filteredBestSalesProducts);

        const filteredMobileProducts = products.filter ((item)=> item.category === "mobile" );
        setMobileProducts(filteredMobileProducts);

        const filteredWirelessProducts = products.filter ((item)=> item.category === "wireless" );
        setWirelessProducts(filteredWirelessProducts);

        const filteredPopularProducts = products.filter ((item)=> item.category === "watch" );
        setPopularProducts(filteredPopularProducts);

    }, []);

    return (
<>
        <Helmet title={"Home"} />
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg='6' md='6' >
                            <div className='hero__content mt-4'>
                                <p className='hero__suptitle'> Trending product in {year} </p>
                                <h2> Maka Your Interior More Minimalistic & Modern </h2>
                                <p className='p__lorem'>Lorem Ipsum is simply dummy text of the printing and Lorem dustry typesetting industry Ipsum has been the 
                                    industry's
                                </p>
                                <motion.button whileTap={{ scale: 1.2 }} 
                                    className='buy__btn'>
                                    <Link to='/shop' >SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6' >
                            <div className='hero__img'>
                                <img src={heroImg} alt=''></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className='trending__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Trending Products</h2>
                        </Col>
                        <ProductsList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className='best__sales'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'> Best Sales </h2>
                        </Col>
                        <ProductsList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className='timer__count'>
                <Container>
                    <Row>
                        <Col lg='6'  md='12' className='clock__all'>
                            <div className='clock__top-content'>
                                <h4 className='text-white fs-6 mb-2' >Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3' >Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button 
                            whileTap={{ scale: 1.2 }} 
                            className='buy__btn store__btn'>
                                <Link to="/shop">Visit Store</Link>
                            </motion.button>
                        </Col>
                        <Col lg='6'  md='12' className='text-end counter__img'>
                            <img src={counterImg} alt='' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='new__arrivals'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-4'>
                            <h2 className='section__title'> New Arrivals </h2>
                        </Col>
                        <ProductsList data={mobileProducts} />
                        <ProductsList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>

            <section className='popular__category'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section__title'> Popular in Category </h2>
                        </Col>
                        <ProductsList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home