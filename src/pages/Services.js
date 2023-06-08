import React from 'react'

function Services() {
  return (
    
    <div className="container-fluid my-5">
        <h1 className="text-center fw-bold display-1 mb-5 white-text">POPULAR ATTRACTIONS</h1>
        <div className="row">
          <div className="col-12 m-auto">
            <div className="owl-carousel owl-theme">
              <div className="item mb-4">
                <div className="card border-0 shadow">
                  <img src="athirapally.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <div className="card-title text-center">
                      <h4>Athirapally Waterfalls </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 shadow">
                  <img src="ezhattumugham.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <div className="card-title text-center">
                      <h4>Ezhattumugham</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 shadow">
                  <img src="malayattoor.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <div className="card-title text-center">
                      <h4>Malayattoor</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 shadow">
                  <img src="thattuapara_church.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <div className="card-title text-center">
                      <h4>St. Thomas Church–Thattupara</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 shadow">
                  <img src="temple.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <div className="card-title text-center">
                      <h4>Thirumoozhikkulam Lakshmana Perumal Temple</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Services
