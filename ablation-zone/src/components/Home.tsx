import Fade from 'react-reveal/Fade';
import Title from 'react-titles/Title10';
import { Container, Row, Col } from 'react-bootstrap'; 
import { homeData } from '../data.js'
function Home() {
    return (
        <Container id="home">
            <Row>
                <Col>
                    <Title size="400" text1="Finance" text2="Glacier" open={true} />
                </Col>
            </Row>
            <Row className="home-container">
                <Col>
                    <Fade left>
                        <span className="home-welcome">
                            { homeData.welcome }
                        </span>
                    </Fade>
                    <div className="home-intro">
                        <Fade left>
                            <span>
                                { homeData.intro1 }
                            </span>
                        </Fade>
                        <Fade left>
                            <span>
                                { homeData.intro2 }
                            </span>
                        </Fade>
                        <Fade left>
                            <span>
                                { homeData.intro2 }
                            </span>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
  
export default Home;
  