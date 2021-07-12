package com.Target.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Target.demo.Model.User;

@Repository
public interface LoginRepository extends JpaRepository<User, String> {

}
