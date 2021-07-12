package com.Target.demo.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="registereduser")
public class User {
	
	@Id
	private String emailid;
	private String name;
	private String role;
	
	public User() {}

	public User(String emailid, String name, String role) {
		super();
		this.emailid = emailid;
		this.name = name;
		this.role = role;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
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
