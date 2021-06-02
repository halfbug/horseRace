
function Rightsidesignup(){

return(
<div className="logRight flex jc tac">
<div className="logBoxBack">
  <p className="cnavy fs35 mb10 fw3">Welcome Back.</p>
  <p className="cgray fs18 fw3 fw3">Enter your details to create your account</p>
  <form accept method="post" className="mt40" align="left">
    <div className="row">
      <div className="col-md-6">
        <label className="w100 fw3 inline fs16 cnavy">Name</label>
        <input type="text" name="name" className="w100 logInp" />
      </div>
      <div className="col-md-6">
        <label className="w100 fw3 inline fs16 cnavy">Email</label>
        <input type="email" name="email" className="w100 logInp" />
      </div>
    </div>
    <label className="w100 fw3 inline fs16 cnavy">Phone Number (Optional)</label>
    <input type="tel" name="phone" className="w100 logInp" />
    <div className="row">
      <div className="col-md-6">
        <label className="w100 fw3 inline fs16 cnavy">Password</label>
        <input type="password" name="password" className="w100 logInp" />
      </div>
      <div className="col-md-6">
        <label className="w100 fw3 inline fs16 cnavy">Confirm Password</label>
        <input type="password2" name="password2" className="w100 logInp" />
      </div>
    </div>
    <button type="submit" name="logBtn" className="btnFull logBtn trans br8 fs16 cwhite fw3">Sign in</button>
    &nbsp;&nbsp;
    <button type="submit" name="discordBtn" className="trans btnFull logBtn discordBtn br8 fs16 fw3">Sign up with Discord</button>
  </form>
</div>
</div> 

)
}
export default Rightsidesignup