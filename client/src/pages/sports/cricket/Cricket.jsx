import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReadMore from '../../../components/readmore/ReadMore'
import Sidebar from '../../../components/sidebar/Sidebar'
import SportsGrid from '../../../components/sportsgrid/SportsGrid'
import SectionTitle from '../../../components/title/SectionTitle'
import './Cricket.css'

function Cricket() {
  return (
    <main>
    <Container>
      <SectionTitle title={"ক্রিকেট"} />
      <Row>
        <Col lg={9}>
             <SportsGrid/>
             <SportsGrid/>
             <SportsGrid/>
             <SportsGrid/>
             <SportsGrid/>
             <SportsGrid/>
             <SportsGrid/>
             <div className="read d-flex justify-center my-5">
                <ReadMore className={'hoverBtn'} style={{width:'500px'}} title={'আরো পড়ুন'}/>
             </div>
        </Col>
        <Col lg={3}>
            <div className="sidebar">
                  <Sidebar/>
            </div>
        </Col>
      </Row>
    </Container>
  </main>
  
  )
}

export default Cricket