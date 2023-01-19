import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 600px;
	width: 1350px;
	left: -27668px;
	top: -8662px;
	border-radius: 0px;
	border: 1px solid red;
	display: flex;
`;
const WrapperLeft = styled.div`
	border: 1px solid blue;
	width: 50%;
	height: 100%;
	background-color: hsl(220, 67%, 96%);
	text-align: center;
	align-items: center;
`;
const WrapperRight = styled.div`
	border: 1px solid blue;
	width: 50%;
	height: 100%;
	background-color: white;
	align-items: center;
	justify-content: center;
	justify-items: center;
	align-content: center;
`;
const Text = styled.h4`
	height: 30px;
	border-radius: nullpx;
	font-family: Montserrat;
	font-style: Bold;
	font-size: 24px;
	margin-top: 120px;
	line-height: 30px;
	line-height: 125%;
	align-items: Center;
	vertical-align: Top;
	color: rgba(32, 55, 101, 1);
`;
const H5 = styled.h5`
	height: 22px;
	left: 149px;
	top: 196px;
	border-radius: nullpx;
	color: rgba(32, 55, 101, 0.8);
`;
const SignInWrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: 160px;
	width: 294px;
	height: 316px;
	border: 1px solid red;
`;
const SubTitle = styled.div`
	height: 28px;
	width: 249px;
	left: 960px;
	top: 292px;
	color: rgba(41, 55, 95, 1);
`;
const UserInput = styled.input`
height: 44px;
width: 294px;
left: 960px;
top: 352px;
border-radius: 0px;

`;
const UserPassword = styled.input`
height: 44px;
width: 294px;
left: 960px;
top: 412px;
border-radius: 0px;


`;
const Option = styled.div`
height: 44px;
width: 294px;
text-align: start;
border: 1px solid red;
justify-content: space-between;

`;


const Login = () => {
	return (
		<Container>
			<WrapperLeft>
				<Text>Welcome to App Name</Text>
				<H5>
					Get ahead of the curve. Join the next generation of health heroes.
				</H5>
			</WrapperLeft>
			<WrapperRight>
				<SignInWrapper>
					<SubTitle>Sign-in to your account</SubTitle>
                    <UserInput placeholder="Username">

                    </UserInput>
                    <UserPassword placeholder="Password">

                    </UserPassword>
                  
				</SignInWrapper>
			</WrapperRight>
		</Container>
	);
};

export default Login;
