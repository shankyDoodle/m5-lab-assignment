import React from 'react'
import ReactFacebookLogin from 'react-facebook-login'
import { Card, CardTitle, CardBody, CardText } from 'reactstrap'

import { Checkout } from './Checkout';


function LoginForm() {
    return <form className='border mt-3 mb-5 p-3 bg-white'>
        <label className='m-2'>Name:</label>
        <input type="text" name="name" placeholder='Your Name' />

        <label className='m-2'>Email:</label>
        <input type="email" name="email" placeholder='Your Email' />

        <input type="submit" value="Login" className='bt bg-success text-white my-3' />
    </form>
}

export const Login = (props) => {
    const responseFacebook = (response) => {
        console.log(response)
        props.setFbData(response)
        props.setFbPic(response.picture.data.url)
        props.setLogin(!!response.accessToken)
    }

    return (
        <div className="container">
            <Card>
                <CardTitle><h1>My React App</h1></CardTitle>
                <CardBody>
                    <CardText>
                        {!props.login ? (<>
                            <h3>Please login using one of the following</h3>
                            <LoginForm />
                            <ReactFacebookLogin
                                appId='481428278337227'
                                autoLoad={false}
                                fields='name,email,picture'
                                scope='public_profile'
                                callback={responseFacebook}
                                icon="fa-facebook"
                            />
                        </>) : <Checkout fbPic={props.fbPic} fbData={props.fbData} />}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}
