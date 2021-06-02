import React from 'react';
import './style.css'

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

 import horsesample from '../img/horse_sample.png'
 import item_sample from '../img/item_sample.png'

function Maincontainer (){
  
function valuetext(value) {
  return `${value}°C`;
}


  const [value1, setValue1] = React.useState([20, 80]);
  const [value2, setValue2] = React.useState([20, 80]);

  const [value3, setValue3] = React.useState([20, 80]);

  const [value4, setValue4] = React.useState([20, 80]);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };

  const handleChange4 = (event, newValue) => {
    setValue4(newValue);
  };







    return(
   
      <section className="mainContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb20">
            <div className="blockBox">
              <h2 className="widgetHead1">Class</h2>
              <div className="classCont">
                <div className="classOuter"><span className="classBox">Class I</span></div>
                <div className="classOuter"><span className="classBox">Class II</span></div>
                <div className="classOuter"><span className="classBox">Class III</span></div>
                <div className="classOuter"><span className="classBox">Class IIV</span></div>
                <div className="classOuter"><span className="classBox">Class V</span></div>
              </div>
              <h2 className="widgetHead1 mt40">Distance</h2>
              <div className="distAvfSlider" >
                <span className="classBox">Short (1000 - 1200mm)</span>
                <span className="classBox">Short (1000 - 1200mm)</span>
                <span className="classBox">Short (1000 - 1200mm)</span>
              </div>
              <div className="flex avgFilterCont mt40 ai jcb">
                <div className="cont">
                  <h2 className="avgFilterTxt">Avg win %</h2>
                </div>
              </div>
              <Typography id="range-slider" gutterBottom>
</Typography>
<Slider
  value={value1}
  onChange={handleChange1}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  getAriaValueText={valuetext}
/>
 
             

              <div className="flex avgFilterCont mt20 ai jcb">
                <div className="cont">
                  <h2 className="avgFilterTxt">Avg win % Distance</h2>
                </div>
              </div>
              <Typography id="range-slider" gutterBottom>
</Typography>
<Slider
  value={value2}
  onChange={handleChange2}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  getAriaValueText={valuetext}
/>
 

              <div className="flex avgFilterCont mt20 ai jcb">
                <div className="cont">
                  <h2 className="avgFilterTxt">Avg Odds</h2>
                  
                </div>
                
                
              </div>

              <Typography id="range-slider" gutterBottom>
</Typography>
<Slider
  value={value3}
  onChange={handleChange3}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  getAriaValueText={valuetext}
/>
 



              
              <div className="flex avgFilterCont mt20 ai jcb">
                <div className="cont">
                  <h2 className="avgFilterTxt">Avg Odds Distance</h2>
                </div>
              </div>
              <Typography id="range-slider" gutterBottom>
</Typography>
<Slider
  value={value4}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  getAriaValueText={valuetext}
/>
 

              <hr className="lightBlueLine mt20 mb 10" />
              <button type="submit" name="searchHorse" className="btnFilter trans cwhite fw3 br5 w100"><i className="fa fa-search" aria-hidden="true" /> &nbsp; Search </button>
            </div> {/* blockBox */}
            <div className="blockBox mt30">
              <table className="changeTable w100">
                <tbody><tr>
                    <th className="cgray">CHANGE</th>
                    <th className="cblue">ENTREE FEE</th>
                    <th className="cgray">REGISTERED</th>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw3">0 M</p>
                      <span className="cgray">85 V</span>
                    </td>
                    <td>
                      <p className="cblue">Entree fee would be %5</p>
                      <p>Prize pool would be $125</p>
                    </td>
                    <td>
                      8/12
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw3">0 M</p>
                      <span className="cgray">85 V</span>
                    </td>
                    <td>
                      <p className="cblue">Entree fee would be %5</p>
                      <p>Prize pool would be $125</p>
                    </td>
                    <td>
                      8/12
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw3">0 M</p>
                      <span className="cgray">85 V</span>
                    </td>
                    <td>
                      <p className="cblue">Entree fee would be %5</p>
                      <p>Prize pool would be $125</p>
                    </td>
                    <td>
                      8/12
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw3">0 M</p>
                      <span className="cgray">85 V</span>
                    </td>
                    <td>
                      <p className="cblue">Entree fee would be %5</p>
                      <p>Prize pool would be $125</p>
                    </td>
                    <td>
                      8/12
                    </td>
                  </tr>
                </tbody></table>
            </div> {/* blockBox */}
          </div> {/* col */}
          <div className="col-md-5 mb20">
            <div className="blockBox">
              <div className="majorBox br8 graybg">
                <h2 className="fs20 mb5">Seatle Chase</h2>
                <p className="cgray2 fs18">1200 M</p>
              </div>
              <div className="majorMiniCont">
                <div className="flex">
                  <div className="majorMiniBox br8 w100 flex ai jc bluebg mr15">
                    <div className="cont">
                      <p className="fw4">Avg win % A distance</p>
                      <p className="cgray2 fs11 mt5">Avg sample text</p>
                      <a href="javascript:" className="cblue inline mt5">View race on Zed Run</a>
                    </div>
                  </div>
                  <div className="majorMiniBox br8 w100 flex ai jc bluebg mr15">
                    <div className="cont">
                      <p className="fw4">Avg win % A distance</p>
                      <p className="cgray2 fs11 mt5">Avg sample text</p>
                      <a href="javascript:" className="cblue inline mt5">View race on Zed Run</a>
                    </div>
                  </div>
                  <div className="majorMiniBox br8 w100 flex ai jc bluebg mr15">
                    <div className="cont">
                      <p className="fw4">Avg win % A distance</p>
                      <p className="cgray2 fs11 mt5">Avg sample text</p>
                      <a href="javascript:" className="cblue inline mt5">View race on Zed Run</a>
                    </div>
                  </div>
                  <div className="majorMiniBox br8 w100 flex ai jc bluebg ">
                    <div className="cont">
                      <p className="fw4">Avg win % A distance</p>
                      <p className="cgray2 fs11 mt5">Avg sample text</p>
                      <a href="javascript:" className="cblue inline mt5">View race on Zed Run</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* blockBox */}
            <div className="blockBox mt30">
              <div className="dashItems">
                <div className="row">
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample} className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample} className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample} className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample}className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample} className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample} className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample} className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample} className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                  <div className="col-md-4 col-xs-6 mb20">
                    <div className="itemBack">
                      <p className="itemTitle">Horse name</p>
                      <div className="itemInner graybg br8">
                        <img src={item_sample}className="itemThumbnail" />
                        <div className="flex ai fw3 mb10 jcb">
                          <p>W %</p>
                          <p>0.0008</p>
                        </div>
                        <p className="cgray2">
                          w % 1000 m
                          <br />
                          P %
                        </p>
                      </div> {/* itemInner */}
                    </div>
                  </div> {/* col */}
                </div> {/* row */}
              </div> {/* dashItems */}
            </div> {/* blockBox */}
          </div> {/* col */}
          {/* blur krna */}
          <div className="col-md-4 mb20">
            <div className="blockBox">
              <form method="post" action>
                <input type="text" name="search" placeholder="Search your horse" className="searchHorseInp w100 br8 mb-2 p-4" />
              </form>
              <div className="image ">
                <img src={horsesample} className="horseResult w100 mt20 image__img" />
                <div className="image__overlay">
                  <div className="image__title">
                    <h3>COMING SOON!</h3>
                  </div>
                </div>
              </div>
            </div> {/* blockBox */}
            <div className="blur">
              <div className="blockBox mt30">
                <p className="fs17 fw3">Race Breakdown</p>
                <hr className="lightBlueLine m10" />
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="raceStatBox bluebg">
                      <p className="fw4">No of hourses</p>
                      <p>205</p>
                      <p>Last win today at 10:45 pm</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="raceStatBox bluebg">
                      <p className="fw4">No of hourses</p>
                      <p>205</p>
                      <p>Last win today at 10:45 pm</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="raceStatBox bluebg">
                      <p className="fw4">No of hourses</p>
                      <p>205</p>
                      <p>Last win today at 10:45 pm</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="raceStatBox bluebg">
                      <p className="fw4">No of hourses</p>
                      <p>205</p>
                      <p>Last win today at 10:45 pm</p>
                    </div>
                  </div>
                </div> {/* row */}
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="raceStatBox bluebg fs11">
                      <p className="fw4">W % 0.0008</p>
                      <p className="cgray2">W % 1000  <br /> P %10</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="raceStatBox bluebg fs11">
                      <p className="fw4">W % 0.0008</p>
                      <p className="cgray2">W % 1000  <br /> P %10</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="raceStatBox bluebg fs11">
                      <p className="fw4">W % 0.0008</p>
                      <p className="cgray2">W % 1000  <br /> P %10</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="raceStatBox bluebg fs11">
                      <p className="fw4">W % 0.0008</p>
                      <p className="cgray2">W % 1000  <br /> P %10</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="raceStatBox bluebg fs11">
                      <p className="fw4">W % 0.0008</p>
                      <p className="cgray2">W % 1000  <br /> P %10</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="raceStatBox bluebg fs11">
                      <p className="fw4">W % 0.0008</p>
                      <p className="cgray2">W % 1000  <br /> P %10</p>
                    </div>
                  </div>
                </div> {/* row */}
              </div> {/* blockBox */}
              <div className="blockBox mt20" align="center">
                <p>Available gates open at the race</p>
              </div>
              <div className="blur__overlay">
                <div className="blur__title">
                  <h3>COMING SOON!</h3>
                </div>
              </div>
            </div>
          </div>
          {/* yhn tk */}
        </div> {/* row */}
      </div> 
      </section>

)}
export default Maincontainer