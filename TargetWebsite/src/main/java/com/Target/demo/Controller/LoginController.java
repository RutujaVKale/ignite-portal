package com.Target.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Target.demo.Model.LoginResponse;
import com.Target.demo.Service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@CrossOrigin
	@GetMapping("/getUser/{emailid}")
	public LoginResponse getUser(@PathVariable("emailid") String emailid) {
		return loginService.getUser(emailid);
	}
	

}
