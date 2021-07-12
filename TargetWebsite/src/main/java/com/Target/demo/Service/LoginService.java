package com.Target.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Target.demo.Model.LoginResponse;
import com.Target.demo.Model.User;
import com.Target.demo.Repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepository repo;
	
	LoginResponse response; 
	
	
	public LoginResponse getUser(String emailid) {		
		response = new LoginResponse(repo.findById(emailid).get().getName(),repo.findById(emailid).get().getRole());
		return response;
	}
}
