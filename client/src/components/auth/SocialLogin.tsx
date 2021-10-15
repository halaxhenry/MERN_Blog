import React from 'react'
import { useDispatch } from 'react-redux'

import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

import { googleLogin, facebookLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token
    dispatch(googleLogin(id_token))
  }
  
  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse
    dispatch(facebookLogin(accessToken, userID))
  }
  

  return (
    <>
      <div className="my-2">
        <GoogleLogin 
        client_id='923182812945-76b0qmjk93925ss70nqjt71al5k4cnui.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
        />
      </div>

      <div className="my-2">
        <FacebookLogin 
        appId="291505665929408"
        onSuccess={onFBSuccess}
        />
      </div>
    </>
  )
}

export default SocialLogin