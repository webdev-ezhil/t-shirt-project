import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Navbar ,Nav,Card,Form } from 'react-bootstrap';
import "./Homepage.css"; 
import AOS from "aos";
import "aos/dist/aos.css";
import{FaYoutube,FaTwitter, FaInstagram} from 'react-icons/fa';

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
});
  },[]);
  return (
    <Container fluid>
            {/* Logo */}
            
            <Row  id="logo"className='d-flex justify-content-center mt-3 mb-3  data-aos="fade-up" '>
        <Col xs="auto">
          <img className='img-fluid' src='logo-regular.png' alt='Logo' />
        </Col>
      </Row>

      {/* Navigation */}
      <Row className="mb-3">
        <Navbar collapseOnSelect expand="md">
          <Container fluid>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle className="mx-auto text-bg-lght" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Women">Women</Nav.Link>
                <Nav.Link href="#Men">Men</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link eventKey={2} href="#Contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>


 {/* Homepage */}
           <Row style={{ backgroundColor: 'pink' }} className="text-center" data-aos="fade-up">
        <Col xs={12} sm={6}>
          <div className="p-3">
            <h6>WOMEN</h6>
            <h1 className="mb-3">Slick. Modern. Awesome. Shop Collection</h1>
            <Button className='bg-dark'>Shop Collection</Button>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <img className='img-fluid' src='hero.png' alt='Hero' />
        </Col>
      </Row>


{/* Girls T-Shirts Section */}
<Row id="Women">
      <Row  className="text-center mt-4" data-aos="fade-up">
        <Col >
          <h1>GIRLS T-SHIRTS</h1>
        </Col>
      </Row>

      <Row className='p-3 text-center' data-aos="fade-up">
        <Col xs={12} sm={6} md={4} lg={4} className='p-2'>
          <img className='img-fluid' src='girl1.jpg' alt='Girl 1' />
          <h6>WOMEN</h6>
          <h1>T-Shirt Name 7</h1>
          <h6>$36.00 – $39.00</h6>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className='p-2'>
          <img className='img-fluid' src='girl2.jpg' alt='Girl 2' />
          <h6>WOMEN</h6>
          <h1>T-Shirt Name 9</h1>
          <h6>$23.00 – $28.00</h6>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className='p-2'>
          <img className='img-fluid' src='girl3.jpg' alt='Girl 3' />
          <h6>WOMEN</h6>
          <h1>T-Shirt Name 10</h1>
          <h6>$33.00 – $36.00</h6>
        </Col>
      </Row>
      </Row>
      


 {/* Other Sections */}
         <Row className="align-items-center" data-aos="fade-up">
        <Col xs={12} md={6} className="p-3">
          <img className="img-fluid mb-4" src="collection-02.jpg" alt="Collection 1" />
          <h6 className="text-center mb-3">MEN</h6>
          <h1 className="text-center mb-4">THE BASE COLLECTION - IDEAL EVERY DAY.</h1>
          <Button className="mx-auto d-block bg-dark">SHOP NOW</Button>
        </Col>
        <Col xs={12} md={6} className="p-3">
          <img className="img-fluid" src="boy2.jpg" alt="Boy 2" />
        </Col>
      </Row>

  {/* Men Collection */}
       <Row id="Men" className="text-center mt-4"  data-aos="fade-up">
        <Col>
          <h1>BOYS T-SHIRTS</h1>
        </Col>
      </Row>

      <Row className='p-3 text-center' data-aos="fade-up">
        <Col xs={12} sm={6} md={4} lg={4} className='p-2'>
          <img src='boy1.jpg' alt='Boy 1' className='img-fluid' />
          <h6>MEN</h6>
          <h1>T-Shirt Name 7</h1>
          <h6>$36.00 – $39.00</h6>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className='p-2'>
          <img src='b2.jpg' alt='Boy 2' className='img-fluid' />
          <h6>MEN</h6>
          <h1>T-Shirt Name 9</h1>
          <h6>$23.00 – $28.00</h6>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className='p-2'>
          <img src='b3.jpg' alt='Boy 3' className='img-fluid' />
          <h6>MEN</h6>
          <h1>T-Shirt Name 10</h1>
          <h6>$33.00 – $36.00</h6>
        </Col>
      </Row>


         {/* Other Sections */}
      <Row className='align-items-center'   data-aos="fade-up">
        <Col xs={12} md={6}>
          <img src='image10.jpg' alt='Girl' className='img-fluid' />
        </Col>
        <Col xs={12} md={6} className='p-3'>
          <h6 className='mb-3'>WOMEN</h6>
          <h1 className='mb-3'>Spring Summer Collection</h1>
          <h4>
            
It's one of the most fun fashion moments of many of our lives, after all. For 2024 things are looking particularly contemporary, with dropped waists, XXL hip padding and oversized sleeves proving the most popular silhouettes.
          </h4>
        </Col>
      </Row>


      {/* About */}
      <Row className='align-items-center' id="About" style={{ height: '100vh', backgroundColor: 'pink' }} data-aos="fade-up">
        <Col>
          <div className='text-center'>
            <h1>About</h1>
            <h1>____________________</h1>
            <h4>
               
Ultimately, content marketing is about making the product visible and known. That is why good fashion texts are indispensable for e-shops and e-commerce in the fashion world. 
            </h4>
            <h6>
            The more questions the content answers about the respective item of clothing or accessory, the more visibility the text will achieve in search engines such as Google or Bing. Figuratively speaking, search engines are now the digital catwalk on which fashion content is presented to the public as a model.
            </h6>
          </div>
        </Col>
      </Row>

      {/* Card Section */}
      <Row className='d-flex justify-content-center bg- p-5'  data-aos="fade-up">
        <Col xs={12} md={8} lg={6}>
          <Card className="mb-3" style={{ background:  '#343a40', color: '#fff' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Card.Img src="body1.jpg" className="img-fluid rounded-start" alt="About Us" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Card.Title className="fw-bold">ABOUT US</Card.Title>
                  <Card.Text>
                    One way you can encourage your website visitors to trust you is through the About page. Consider it a virtual handshake, wherein you welcome your potential customers to your business and showcase the people behind the brand. With this, you're creating a sense of authenticity, transparency, and approachability.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      


      {/* Contact */}
      <Row className="justify-content-center align-items-center" id="Contact" style={{ height: '100vh', backgroundColor: 'pink' }} data-aos="fade-up">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form className="p-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='bg-dark' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Row>
        <Col className='d-flex justify-content-around'>
    < FaYoutube   className="icons youtube" />
    <FaInstagram className="icons instragram"/>
    <FaTwitter className="icons twitter"/>
    </Col>

        </Row>
        <Row >
          <Col className='d-flex justify-content-center'>
         <h2>COPYRIGHT 2023 TSHIRT-STORE / EZHILMARAN</h2>
         </Col>
        </Row>
   
      </Row>
      
{/* Footer */}
 
      {/* ... */}
 </Container>
  );
}
export default Homepage;



































































       











