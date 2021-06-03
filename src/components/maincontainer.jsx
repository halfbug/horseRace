import React, {useState, useEffect} from 'react';
import './style.css'
import { gql, useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { set } from 'dot-prop-immutable';
 import horsesample from '../img/horse_sample.png'
 import item_sample from '../img/item_sample.png'
 import axios from 'axios';

 function HourseContainer ({horse}){
  const [ihorse, setihorse] = useState(horse);

  const getStats = (horseId)=>{
    axios({
      method: 'POST',
      url: 'api/v1/scraper/horsestats',
      data: { horseId },
      crossdomain: true,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          "Accept": 'application/json',
          //"Authorization": res.data.signIn.token ? `Bearer ${res.data.signIn.token}` : ''
      }
  }).then(({data: stats}) => {
   setihorse({...ihorse, stats})
  
    
  
    
  
  }).catch(er => console.log(er));
   }
useEffect(()=>{
getStats(horse.horse_id);
if(ihorse.horse_id !== horse.horse_id)
setihorse(horse);
},[horse])

  return <><div className="col-md-4 col-xs-6 mb20">
                   
  <div className="itemBack">
    <p className="itemTitle">{ihorse.name}</p>
    <div className="itemInner graybg br8">
      <img src={ihorse.img_url} className="itemThumbnail" alt="horse"/>
     
      <div className="flex ai fw3 mb10 jcb">
        <p>W %</p>
        <p>{ihorse.stats ? ihorse.stats.totalWinPercentage : "..."}</p>
      </div>
      <p className="cgray2">
        w %  {ihorse.stats? ihorse.stats.winPercentageByDistance[2] : "..."}m
        <br />
        P % {ihorse.stats? ihorse.stats.totalPlacePercentage : "..."}
      </p>
    </div> 
  </div>
</div></>
 }


function Maincontainer (){
  const GET_RES = gql`
  query ($input: GetRaceResultsInput, $before: String, $after: String, $first: Int, $last: Int) {
       getRaceResults(before: $before, after: $after, first: $first, last: $last, input: $input) {
         edges {
       cursor
       node {
         country
         city
         name
         length
         start_time
         fee
         race_id
         weather
         status
         class
         prize_pool {
           first
           second
           third
           total
         }
         horses {
           horse_id
           finish_time
           final_position
           name
           gate
           owner_address
           bloodline
           gender
           breed_type
           gen
           coat
           hex_color
           img_url
           class
           stable_name
           win_rate
         }
       }
     }
         pageInfo {
           startCursor
           endCursor
           hasNextPage
           hasPreviousPage
         }
       }
     }
 `;
 
 const { loading, error, data } = useQuery(GET_RES,{ 
   variables: {
     first:10,
     input:{
       onlyMyRacehorses:false,
       distance:{
         from:1000,
         to:2400
       }
     }
   }
 }
 );
 console.log("🚀 ~ file: App.js ~ line 16 ~ loading", loading)
 console.log("🚀 ~ file: App.js ~ line 16 ~ error", error)
 console.log("🚀 ~ file: App.js ~ line 16 ~ data", data);
 const [races, setRaces] = useState([]);
 const [selectedIndex, setselectedIndex] = useState(0);
 const [selectedRace, setSelectedRace] = useState();
 useEffect(()=>{
  if(!loading && races.length<1) 
  {
    const {getRaceResults:{edges: raceslist}} = data;
    console.log(raceslist);
    setRaces(raceslist);
    setSelectedRace(raceslist[0].node);
 }
 },[loading])
 
function valuetext(value) {
  return `${value}°C`;
}
const [horseStats, sethorseStats] = useState([])
console.log(races)


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




console.log(horseStats)


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
                    <th className="cgray">RACE</th>
                    <th className="cblue">ENTREE FEE</th>
                    <th className="cgray">REGISTERED</th>
                  </tr>
                  {races.length>0 && races.map(({node: race},index) =>{
                    return(<> <tr>
                    <td>
                      <a onClick={()=>{
                        setselectedIndex(index); 
                        setSelectedRace(race);
                        }}>
                      <p className="fw3"  >{race.name.toString()}</p>
                      </a>
                      <span className="cgray">Class {race.class}</span>
                    </td>
                    <td>
                      <p className="cblue">Entree fee would be %{(race.fee*100).toFixed(2)}</p>
                      <p>Prize pool would be $125</p>
                    </td>
                    <td>
                      {race.horses.length}/12
                    </td>
                  </tr>
                 </>)}
                 )} 
                 
                </tbody></table>
            </div> {/* blockBox */}
          </div> {/* col */}
          
          {!loading && races.length>0 ?
          <div className="col-md-5 mb20">
            <div className="blockBox">
              <div className="majorBox br8 graybg">
                <h2 className="fs20 mb5">{races[selectedIndex].node.name}</h2>
                <p className="cgray2 fs18">{races[selectedIndex].node.length}M</p>
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
                  
                  {selectedRace && selectedRace.horses.map(horse=><HourseContainer horse={horse} key={horse.horse_id} />)}
                  </div> 
              </div> 
            </div>
          </div> 
          : "loading..."}
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