import React from 'react'

const Slider = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/a.jpg" className="d-block w-100" alt="jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='hikmat'>First slide label</h5>
        <p className='hikmat'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src="/images/b.jpg" className="d-block w-100" alt="jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/c.jpg" className="d-block w-100" alt="jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider