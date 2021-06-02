
import { useHistory } from 'react-router-dom';

function Rightsidelogin(){
  const history = useHistory();

    return(

      <div className="logRight flex ai jc tac">
      <div className="logBoxBack">
        <p className="cnavy fs35 mb10 fw3">Welcome Back.</p>
        <p className="cgreen fs20 fw3 fw3">New Here? Create Account</p>
        <form accept method="" className="mt40" align="left">
          <label className="w100 fw3 inline fs16 cnavy">Email</label>
          <input type="Email" name="email" className="w100 logInp" />
          <div className="flex ai jcb">
            <label className=" fw3 inline fs16 cnavy">Password</label><a href="JavaScript:" className="cgreen fw3 inline">Forgot password?</a>
          </div>
          <input type="password" name="password" className="w100 logInp" />
          <button onClick={()=>history.push('./dashboard')}name="logBtn" className="btnFull logBtn trans br8 fs16 cwhite fw3">Sign in</button>
          &nbsp;&nbsp;
          <button type="submit"    name="discordBtn" className="trans btnFull logBtn discordBtn br8 fs16 fw3">Sign in with Discord</button>
        </form>
      </div>
    </div> 





    )}
    
    
    
    export default Rightsidelogin