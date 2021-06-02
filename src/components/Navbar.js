import subscription from '../img/subsIcon1.png'
import userimage1 from '../img/userImg1.png'
import accimage from '../img/accImg.png'
import profileicon from '../img/profileIcon.png'
import settingicon from  '../img/settingIcon.png'
import signouticon from '../img/signOutIcon.png'

 
    
    
   
    
 
    
    
    
    
    
    
    
    
    
    

function Navbar(){

    return(


<section className="topNavBar">
<div className="container">
  <div className="flex ai jcb rel">
    <div className="TopMenuClick">
      <div className="topBarCont br8 flex ai jc">
      <span class="inline menuBtn pointer us"></span>    
                    <div className="mainMenuCont abs">
          <h2 className="fs20">Stable Stats</h2>
          <div className="menuFlexOuter flex">
            <div className="leftMenuFlex w100 flex">
              <div className="menuDropBack">
                <ul className="menuDropUl">
                  <li className="menuDropHead">Dashboards</li>
                  <li><a href="javascript:" className="cgreen menuDropLink">Start</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Compact</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Light</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Extended</a></li>
                </ul>
              </div>
              <div className="menuDropBack">
                <ul className="menuDropUl">
                  <li className="menuDropHead">Dashboards</li>
                  <li><a href="javascript:" className="cgreen menuDropLink">Start</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Compact</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Light</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Extended</a></li>
                </ul>
              </div>
              <div className="menuDropBack">
                <ul className="menuDropUl">
                  <li className="menuDropHead">Dashboards</li>
                  <li><a href="javascript:" className="cgreen menuDropLink">Start</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Compact</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Light</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Extended</a></li>
                </ul>
              </div>
              <div className="menuDropBack">
                <ul className="menuDropUl">
                  <li className="menuDropHead">Dashboards</li>
                  <li><a href="javascript:" className="cgreen menuDropLink">Start</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Compact</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Light</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Extended</a></li>
                </ul>
              </div>
              <div className="menuDropBack">
                <ul className="menuDropUl">
                  <li className="menuDropHead">Dashboards</li>
                  <li><a href="javascript:" className="cgreen menuDropLink">Start</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Compact</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Light</a></li>
                  <li><a href="javascript:" className=" menuDropLink">Extended</a></li>
                </ul>
              </div>
            </div>
            <div className="rightMenuFlex">
              <h2 className="fs15 mb15">Quick Links</h2>
              <div className="flex">
                <div className="inFlex qLinkBox w100 br8 ai jc">
                  <div className="cont">
                    <p className="fw3 mb5 fs17">Security</p>
                    <span className="fs13 cgray2">$299/month</span>
                  </div>
                </div>
                <div className="inFlex qLinkBox w100 br8 ai jc" style={{background: '#FDECF3'}}>
                  <div className="cont">
                    <p className="fw3 mb5 fs17">Demo</p>
                    <span className="fs13 cgray2">$Free version</span>
                  </div>
                </div>
                <div className="inFlex qLinkBox w100 br8 ai mr0 jc" style={{background: '#FFF9DF'}}>
                  <div className="cont">
                    <p className="fw3 mb5 fs17">Try now</p>
                    <span className="fs13 cgray2">$Trial version</span>
                  </div>
                </div>
              </div> {/* flex */}
              <div className="flex">
                <div className="qlinkleft mr20">
                  <div className="inFlex qLinkBox w100 br8 ai jc" style={{background: '#E9FFF5'}}>
                    <div className="cont">
                      <p className="fw3 mb5 fs17">Payment methods</p>
                      <span className="fs13 cgray2">cgray2Credit cards/ Debit cards, PayPal, Transferwise and Others</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="inFlex qLinkBox w100 br8 ai jc" style={{background: '#FFF9DF'}}>
                      <div className="cont">
                        <p className="fw3 mb5 fs17">Support</p>
                        <span className="fs13 cgray2">$6 months free</span>
                      </div>
                    </div>
                    <div className="inFlex qLinkBox w100 br8 ai mr0 jc" style={{background: '#EAF6FF'}}>
                      <div className="cont">
                        <p className="fw3 mb5 fs17">Installation</p>
                        <span className="fs13 cgray2">$$0.99 Per Machine</span>
                      </div>
                    </div>
                  </div>										
                </div> {/* qlinkleft */}
                <div className="qlinkright">
                  <div className="inFlex qLinkBox m0 w100 br8 ai mr0 jc" style={{background: '#F7F0FC'}}>
                    <div className="cont">
                      <p className="fw3 mb5 fs17">Try now</p>
                      <span className="fs13 cgray2">$Trial version</span>
                    </div>
                  </div>
                </div>
              </div> {/* flex */}
            </div>
          </div> {/* menuFlexOuter */}
        </div>
      </div> 
    </div> {/* TopMenuClick */}
    <a href="javascript:" className="topMenuLink">Racing</a>
    <a href="javascript:" className="topMenuLink">Breeding</a>
    <a href="javascript:" className="topMenuLink">Rozz</a>
    <a href="javascript:" className="topMenuLink">Shared stable</a>
    <div className="accountTopCont rel">
      <div className="fw accountUserTxt pointer us">My account
        <span className="accountUserImg br5"><img src={userimage1} width="12px" /></span>
      </div>
      <div className="myAccDrop abs">
        <img src={accimage} className="userProfilePic us" width="38px" />
        <div className="flex mt20">
          <a href="javascript" className="myAccDropLink us pointer">
            <img src={profileicon} />
            My Profile
          </a>
          <a href="javascript" className="myAccDropLink us pointer">
            <img src={settingicon} />
            Settings
          </a>
        </div>
        <div className="flex">
          <a href="javascript" className="myAccDropLink us pointer">
            <img src={subscription} />
            Subscriptions
          </a>
          <a href="javascript" className="myAccDropLink us pointer">
            <img src={signouticon} />
            Sign out
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
    )}
export default Navbar