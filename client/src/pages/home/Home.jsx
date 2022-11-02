import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../../components/sidebar/Sidebar'
import LeadPhoto from '../../assets/budget-1654768200-1667242636.jpg'
import './Home.css'
import { Link } from "react-router-dom";
import LeadNewsList from '../../components/leadnewslist/LeadNewsList'
import NewsGrid from '../../components/newsgrid/NewsGrid'
import NamazTime from '../../components/namaztime/NamazTime'
import SectionTitle from '../../components/title/SectionTitle'
import Slider from '../../components/slider/Slider'

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
                          <a href=""><p>সব খবর <i className="fas fa-angle-double-right"></i></p></a>
                        </div>
                        <NamazTime/>
                     </div>
                </Col>
            </Row>
         </Container>
  
         <Container>    
               <div className="country">
                 <SectionTitle title={'জাতীয়'}/>
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

         <Container>
               <SectionTitle title={'রাজনীতি'} /> 
               <Row>
                   <Col lg={6} className={'border-inner-right'}>
                       <NewsGrid/>
                   </Col>
                   <Col lg={3} >
                      <LeadNewsList/>
                      <LeadNewsList/>
                      <LeadNewsList/>
                      <LeadNewsList/>
                      <LeadNewsList/>
                   </Col>
                   <Col lg={3} className={'border-inner-left'}>
                      <LeadNewsList/>
                      <LeadNewsList/>
                   </Col>
               </Row>
         </Container>

          <Container>
               <SectionTitle title={'চ্যানেল 24 স্পেশাল'}/>
               <div className="slider">
                   <Slider/>
                </div> 
         </Container> 
    </main>
  )
}

export default Home