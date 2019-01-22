import React from 'react';
import {connect} = from 'react-redux';
import { Button } from 'react-bootstrap';

export var Wall = () => {
  return (
      <section>
          <div className="row">
            <div className="col-12" >
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="item active">
                      <img className="img-responsive" src={"/images/pizza.jpg"} alt="First slide"/>
                    </div>

                    <div className="item">
                      <img className="img-responsive" src={"/images/dominos_main_image.jpg"} alt="Second slide"/>
                    </div>

                    <div className="item">
                      <img className="img-responsive" src={"/images/burger.jpg"} alt="Third slide"/>
                    </div>
                  </div>

                  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div>
        </div>
        <div className="container margin-3">
          <div className="row text-center">
            <div className="col-12" >
              <h2 className="text-center">A platform made for you to share and redeem <br/> discount codes</h2>
            </div>
          </div>
        </div>
    </section>

  );
};

export default connect()(Wall);
