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

  const getStats = (horseId, horseRequest)=>{
    axios({
      method: 'POST',
      url: 'api/v1/scraper/horsestats',
      data: { horseId },
      cancelToken: horseRequest.token, // 2nd step
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
  const horseRequest = axios.CancelToken.source()
getStats(horse.horse_id, horseRequest);
if(ihorse.horse_id !== horse.horse_id)
setihorse(horse);
return () => {
  horseRequest.cancel() // <-- 3rd step
}
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

function RaceContainer ({selectedRace}) {

  const [irace, setirace] = useState(selectedRace);

  const getStats = (raceId,ourRequest)=>{
    axios({
      method: 'POST',
      url: 'api/v1/scraper/racestats',
      data: { raceId },
      cancelToken: ourRequest.token, // 2nd step
      crossdomain: true,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          "Accept": 'application/json',
          //"Authorization": res.data.signIn.token ? `Bearer ${res.data.signIn.token}` : ''
      }
  }).then(({data: stats}) => {
   setirace({...irace, stats})
  
    
  
    
  
  }).catch(er => console.log(er));
   }
useEffect(()=>{
  const ourRequest = axios.CancelToken.source()
getStats(selectedRace.race_id, ourRequest);
if(irace.race_id !== selectedRace.race_id)
setirace(selectedRace);
return () => {
  ourRequest.cancel() // <-- 3rd step
}
},[selectedRace]);

  return <div className="col-md-5 mb20">
  <div className="blockBox">
    <div className="majorBox br8 graybg">
      <h2 className="fs20 mb5">{selectedRace.name}</h2>
      <p className="cgray2 fs18">{selectedRace.length}M</p>
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
  const [classes, setclasses] = useState([]);
  console.log("🚀 ~ file: maincontainer.jsx ~ line 197 ~ Maincontainer ~ classes", classes)
  const [distance, setdistance] = useState({
    from: 1000,
    to: 2400
  });
  console.log("🚀 ~ file: maincontainer.jsx ~ line 199 ~ Maincontainer ~ distance", distance)
  

  const [searchInput, setSearchInput] = useState({onlyMyRacehorses:false})
//  let searchInput = {
//   onlyMyRacehorses:false,
//   distance
  
// }
 const { loading, error, data } = useQuery(GET_RES,{ 
   variables: {
     first:10,
     input:searchInput
   }
 }
 );
useEffect(()=>{console.log(data)},[data]);

 const handleSubmit=()=>{
  // e.preventdefault();
   console.log(distance);
   console.log(classes)
   let sinput = {onlyMyRacehorses:false, distance};
   if(classes.length>0)
   sinput={...sinput, classes:[ ...new Set(classes)].sort()};

   console.log("🚀 ~ file: maincontainer.jsx ~ line 227 ~ handleSubmit ~ sinput", sinput)
  //  setclasses([]);
  //  setdistance({
  //   from: 1000,
  //   to: 2400
  // })
   setSearchInput(sinput);
   
 }
 console.log("🚀 ~ file: App.js ~ line 16 ~ loading", loading)
 console.log("🚀 ~ file: App.js ~ line 16 ~ error", error)
 console.log("🚀 ~ file: App.js ~ line 16 ~ data", data);
 const [races, setRaces] = useState([]);
 const [selectedIndex, setselectedIndex] = useState(0);
 const [selectedRace, setSelectedRace] = useState();
 useEffect(()=>{
  if(!loading) 
  {
    const {getRaceResults:{edges: raceslist}} = data;
    console.log(raceslist);
    setRaces(raceslist);
    setSelectedRace(raceslist[0].node);
 }
 },[data])
 
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

const handleCheckboxClick=(num)=>{
  let clobj = classes;
    if(clobj.indexOf(num)> -1)
    clobj.splice(classes.indexOf(num),1);
    else
    clobj.push(num)
    setclasses([...new Set(clobj)])
    
}

const isChecked=(num)=>{
if(classes.indexOf(num)<0)
return false
else
return true
}

// console.log(horseStats)


    return(
   
      <section className="mainContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb20">
            <div className="blockBox">
              <h2 className="widgetHead1">Class</h2>
              <div className="classCont">
               
                <div className="classOuter"><span className={`classBox ${isChecked(1)?`checked`:''}`} onClick={()=>handleCheckboxClick(1)
                  }>Class I</span></div>
                <div className="classOuter"><span className={`classBox ${isChecked(2)?`checked`:''}`}  onClick={()=>handleCheckboxClick(2)}>Class II</span></div>
                <div className="classOuter"><span className={`classBox ${isChecked(3)?`checked`:''}`}  onClick={()=>handleCheckboxClick(3)}>Class III</span></div>
                <div className="classOuter"><span className={`classBox ${isChecked(4)?`checked`:''}`}  onClick={()=>handleCheckboxClick(4)}>Class IIV</span></div>
                <div className="classOuter"><span className={`classBox ${isChecked(5)?`checked`:''}`}  onClick={()=>handleCheckboxClick(5)}>Class V</span></div>
              </div>
              <h2 className="widgetHead1 mt40">Distance</h2>
              <div className="distAvfSlider" >
                <span className={`classBox slick-slide  ${distance.from === 1000?`checked`:''}`}  onClick={()=>setdistance({from:1000, to:1200})}>Short (1000 - 1200mm)</span>
                <span className={`classBox slick-slide  ${distance.from === 1400?`checked`:''}`}  onClick={()=>setdistance({from:1400, to:1800})}>Middle ( 1400-1800)</span>
                <span className={`classBox slick-slide  ${distance.from === 2000?`checked`:''}`}  onClick={()=>setdistance({from:2000, to:2600})}>Long (2000-2600)</span>
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
              <button onClick={handleSubmit} type="submit" name="searchHorse" className="btnFilter trans cwhite fw3 br5 w100"><i className="fa fa-search" aria-hidden="true" /> &nbsp; Search </button>
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
          <RaceContainer selectedRace={selectedRace} />
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