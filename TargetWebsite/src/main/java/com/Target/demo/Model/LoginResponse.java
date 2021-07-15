package com.Target.demo.Model;

import org.springframework.stereotype.Component;

@Component
public class LoginResponse {
	private String name;
	private String role;
	
	public LoginResponse() {}

	public LoginResponse(String name, String role) {
		super();
		this.name = name;
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	


}
