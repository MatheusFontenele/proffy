import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//pages
import Landing from "./pages/landing";
import TeacherList from "./pages/teacherList";
import TeacherForm from "./pages/teacherForm";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import SucessPage from "./pages/Sucess";
import forgetPage from "./pages/forgetPage";
import SucessForgetPage from "./pages/SucessForget";

function Routes() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={LoginPage} />
			<Route path="/home" component={Landing} />
			<Route path="/study" component={TeacherList} />
			<Route path="/give-classes" component={TeacherForm} />
			<Route path="/register" component={RegisterPage} />
			<Route exact path="/sucess" component={SucessPage} />
			<Route path="/recuperar" component={forgetPage} />
			<Route path="/sucess-recuperar" component={SucessForgetPage} />
		</BrowserRouter>
	);
}
export default Routes;
