import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../../components/sidebar/Sidebar'
import LeadPhoto from '../../assets/budget-1654768200-1667242636.jpg'
import './Home.css'
import { Link } from "react-router-dom";
import LeadNewsList from '../../components/leadnewslist/LeadNewsList'
import NewsGrid from '../../components/newsgrid/NewsGrid'
import Icon from '../../assets/favicon.ico'
import NamazTime from '../../components/namaztime/NamazTime'

function Home() {
  

  return (
    <main className='mt-3'>
        <Container>
            <Row>
                <Col lg={9}>
                   <div className="leadNewsWrapper bg-light"> 
                    <Row>
                    <Col lg={7} className={'border-inner-right'}>
                       <Link to={'/:id'}>
                          <div className="leadNews">
                            <Card className='bg-light border-0' style={{ width: '100%' }}>
                              <Card.Img variant="top" src={LeadPhoto} />
                              <Card.Body>
                                <Link to={'/:id'}>ব্যবসার আড়ালে অর্থপাচার: বছরে সন্দেহজনক লেনদেন সাড়ে ৮ হাজার</Link>
                              </Card.Body>
                            </Card>  
                            </div>
                            </Link>
                        </Col>
                        <Col lg={5}>
                             <div className="leadNewsList">
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                             </div>
                        </Col>
                    </Row> 
                    </div>
                     <Row >
                        <Col className='my-2' lg={4}>
                            <NewsGrid/>
                        </Col>
                        <Col className='my-2' lg={4}>
                            <NewsGrid/>
                        </Col>
                        <Col className='my-2' lg={4}>
                            <NewsGrid/>
                        </Col>
                        <Col className='my-2' lg={4}>
                            <NewsGrid/>
                        </Col> 
                        <Col className='my-2' lg={4}>
                            <NewsGrid/>
                        </Col> 
                        <Col className='my-2' lg={4}>
                            <NewsGrid/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className={'border-inner-left'}>
                     <div className="sideBar pt-4">
                          <Sidebar/>
                        <div className="allnews">
                          <a href=""><p>সব খবর <i class="fas fa-angle-double-right"></i></p></a>
                        </div>
                        <NamazTime/>
                     </div>
                </Col>
            </Row>
         </Container>
  
         <Container>    
         <div className="country">
         <div class="SPSecTitle "><a href="/"><h2 className='d-flex align-items-center gap-2'><img loading="lazy" src={Icon} alt="" width="18" height="18" class="SPSecTitleIcon"/>জাতীয়</h2></a></div>
                 <Row>
                     <Col lg={9}>
                         <Row>
                             <Col lg={6}>
                                 <NewsGrid/>
                             </Col>
                             <Col lg={6}>
                                 <NewsGrid/>
                             </Col>
                         </Row>
                     </Col>
                     <Col lg={3}>
                          <div className="headline">
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                                  <Link to={'/:id'}> <LeadNewsList/> </Link>
                          </div>
                     </Col>
                 </Row>
                </div>
         </Container>
     
    </main>
  )
}

export default Home