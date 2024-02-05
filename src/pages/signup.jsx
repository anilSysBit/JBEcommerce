import React, { useEffect } from "react";

const Signup = () => {


    // Getting 31 Day in an array
    let dayArray = [];
    for(let i = 1; i<=31; i++){
        dayArray.push(i)
    }


    // Getting 100 years in Array
    let yearArray = [];
    let currDate = new Date();
    for(let i = 1990; i <=parseInt(currDate.getFullYear()); i++){
        yearArray.push(i)
    }
    useEffect(()=>{
        
    },[])

    
  return (
    <div className="signup_main_container">
      <div className="login_main_container">
        <div className="login_size_manager">
          <div className="form_header">
            <h3>Create your Daraz Account </h3>
            <p>
              Already Member ? <span>Login</span> here
            </p>
          </div>
          <form action="#">
            <div className="left">

                {/* email field */}

              <div className="form_control">
                <label htmlFor="email">Phone Number of Email*</label>
                <input
                  type="text"
                  placeholder="Please enter your Phone number or Email"
                />
              </div>

              {/* Whatsapp Verification */}

              <div className="form_control">
                <label htmlFor="email">Verification Code from Whatsapp*</label>
                <input type="number" placeholder="Verification Code" />
                <p>Get Code via other methods</p>
              </div>

              {/* password */}

              <div className="form_control">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  placeholder="Please enter your Password"
                />
              </div>

              {/* birth date field and Gender*/}

              <div className="form_control date_gender_control">
                <div className="date">
                <label htmlFor="date">Birth Date</label><br/>
                <div className="date_select_boxes">

                    {/* Month */}

                <select name="Month" className="month">
                    <option value="" hidden>Month</option>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((elem,index)=>{
                        return(
                            <option value={index+1}>{index+1}</option>
                        )
                    })}
                </select>

                {/* Day */}

                <select name="Day" className="day">
                    <option value="" hidden>Day</option>
                    {dayArray.map((elem,index)=>{
                        return(
                            <option value={index+1}>{index+1}</option>
                        )
                    })}
                </select>

                {/* Year */}

                <select name="year" className="year">
                    <option value="" hidden>Year</option>
                    {yearArray.map((elem,index)=>{
                        return(
                            <option value={elem}>{elem}</option>
                        )
                    })}
                </select>
                
                </div>
                </div>

                {/* Gender */}


                <div className="gender">
                <label htmlFor="gender">Gender</label><br/>
              <select name="gender">
                    <option value="" hidden>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                </div>
              </div>


            </div>


            <div className="right">
            <div className="form_control">
                <label htmlFor="fullname">Full name*</label>
                <input type="text" placeholder="Enter your first and last name" />
            </div>

            <span className="sms_offer">
                <input type="checkbox" />
                <p>I would like to receive exclusive offers and promotions via SMS</p>
            </span>
            
              <button className="gb_login">Signup</button>
              <p className="privacy_policy_text">By clicking "SIGN UP" I agree to Darazs <span>Terms and Use</span> and <span>Privacy and Policy</span></p>
              <br /> <br />
              or, Signup with <br />
              <div className="facebook_google_box">
              <button className="fb_login">Facebook</button>
              <button className="google_login">Google</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
