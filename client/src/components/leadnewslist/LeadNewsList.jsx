import React from 'react'
import { Col, Row } from 'react-bootstrap'
import climet from '../../assets/climet-report-1667232205.jpg'
import './LeadNewsList.css'

function LeadNewsList() {
  return (
    <div className='LeadNewsList bg-light py-3'>
        <Row>
             <Col lg={4}>
                 <div className="newsImg video">
                       <figure>
                          <picture>
                                <img src={climet} alt="" />
                          </picture>
                      </figure>
                </div> 
             </Col>
             <Col lg={8}>
                  <div className="desc">
                      <h3>ঘূর্ণিঝড়ে বছরে ক্ষতি ১০ হাজার কোটি টাকা, কৃষি জিডিপি কমার শঙ্কা (ভিডিও)</h3>
                  </div>
             </Col>  
        </Row>
    </div>
  )
}

export default LeadNewsList