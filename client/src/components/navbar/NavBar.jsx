import React from 'react'
import './NavBar.css'
import LiveImg from '../../assets/live2.gif'
import logo from '../../assets/logo.webp'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import MegaMenu from '../megamenu/MegaMenu';

function NavBar() {

  return (
    <header id='headerWrapper'>
            <div className="top-bar">
         <Container>
               <Row className='align-items-center'>
             
                    <Col lg={9}>
                       <div className="dateAndTime">
                         <p><i class="fa-solid fa-location-pin"></i> ঢাকা <i class="fa-solid fa-calendar"></i> মঙ্গলবার , ০১ নভেম্বর ২০২২, ১৬ অগ্রহায়ণ ১৪২৯, ০৬ রবিউস সানি ১৪৪৪</p>
                       </div>
                    </Col>

                    <Col lg={3}>            
                    <div className="topSocial">
                         <ul>
                          <li className='fb-icon'><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                             <li className='yt-icon'><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                             <li className='tw-icon'><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                             <li className='link-icon'><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                             <li className='en-icon'><a href="#"><i class="fa-solid fa-envelope"></i></a></li>
                             <li className='liveImg'><a href="#"><img src={LiveImg} alt="" /></a></li>
                         </ul>
                    </div>
                    </Col>
                
               </Row>        
            </Container> 
            </div>
            {/* headerLogo start */}
            <div className="headerLogo p-lg-4">
                <Container>
                     <Row>
                         <Col lg={3}>
                             <div className="logo">
                                  <a href="#">
                                      <img src={logo} alt="" />
                                  </a>
                             </div>
                         </Col>
                         <Col lg={9}>
                         
                         </Col>
                     </Row>
                </Container>
            </div>
              {/* headerLogo end */}
            {/* headerNav  Start*/}

            <div className="bg-light headerNav">
                 <Container>
                      <Row>
                          <Col>
                            <Navbar bg="light" expand="lg">
                              <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                  <Nav>
                                    <Nav.Link href="#home">প্রচ্ছদ</Nav.Link>
                                    <Nav.Link href="#link">জাতীয়</Nav.Link>
                                    <Nav.Link href="#link">রাজনীতি <i class="fa-solid fa-caret-down"></i>
                                         
                                          <ul className='dropDown'>
                                              <li><Nav.Link> আওয়ামী লীগ</Nav.Link></li>
                                              <li><Nav.Link> বিএনপি</Nav.Link></li>
                                              <li><Nav.Link> অন্যান্য</Nav.Link></li>
                                          </ul>
                                    
                                    </Nav.Link>
                                    <Nav.Link href="#link">আন্তর্জাতিক <i class="fa-solid fa-caret-down"></i>
                                    
                                    
                                         <ul className='dropDown'>
                                              <li><Nav.Link>আমেরিকা</Nav.Link></li>
                                              <li><Nav.Link> ইউরোপ</Nav.Link></li>
                                              <li><Nav.Link> অস্ট্রেলিয়া</Nav.Link></li>
                                              <li><Nav.Link> এশিয়া</Nav.Link></li>
                                              <li><Nav.Link> আফ্রিকা</Nav.Link></li>
                                              <li><Nav.Link> মধ্যপ্রাচ্য</Nav.Link></li>
                                          </ul>
                                    
                                    </Nav.Link>
                                    <Nav.Link href="#link">অর্থনীতি <i class="fa-solid fa-caret-down"></i>
                                            
                                        <ul className='dropDown'>
                                              <li><Nav.Link>কর্পোরেট</Nav.Link></li>
                                           
                                          </ul>
                                    
                                    
                                    </Nav.Link>
                                    <Nav.Link href="#link">খেলা <i class="fa-solid fa-caret-down"></i>
                                         
                                         <ul className='dropDown'>
                                              <li><Nav.Link>ক্রিকেট</Nav.Link></li>
                                              <li><Nav.Link> ফুটবল</Nav.Link></li>
                                              <li><Nav.Link> অন্যান্য</Nav.Link></li>
                                       
                                          </ul>
                                    
                                    
                                    </Nav.Link>
                                    <Nav.Link href="#link">বিনোদন</Nav.Link>
                                    <Nav.Link href="#link">সারাদেশ <i class="fa-solid fa-caret-down"></i>
                                      
                                       <ul className='dropDown'>
                                              <li><Nav.Link>ঢাকা</Nav.Link></li>
                                              <li><Nav.Link>চট্টগ্রাম</Nav.Link></li>
                                              <li><Nav.Link>খুলনা</Nav.Link></li>
                                              <li><Nav.Link>রাজশাহী</Nav.Link></li>
                                              <li><Nav.Link>সিলেট</Nav.Link></li>
                                              <li><Nav.Link>বরিশাল</Nav.Link></li>
                                              <li><Nav.Link>রংপুর</Nav.Link></li>
                                              <li><Nav.Link>ময়মনসিংহ</Nav.Link></li>
                                            
                                          </ul>
                                    
                                    </Nav.Link>
                                    <Nav.Link href="#link">লাইফস্টাইল</Nav.Link>
                                    <Nav.Link href="#link">ছবির গল্প</Nav.Link>
                                    <Nav.Link href="#link">ভিডিও গ্যালারি</Nav.Link>
                                    <Nav.Link className='mega' href="#link">সব <i class="fa-solid fa-bars"></i>
                                    
                                    <div className="megaMenuWrapper">
          
                                        <MegaMenu/>
                                  
                                    </div>
                                   
                                    
                                    </Nav.Link>
                                  </Nav>
                                  <div className="search ms-3">
                                      <button><i class="fa-regular fa-magnifying-glass"></i></button>
                                  </div>
                                </Navbar.Collapse>
                              </Container>
                            </Navbar>
                          </Col>
                      </Row>
                 </Container>
            </div>
             {/* headerNav end*/}
    </header>
  )
}
 
export default NavBar