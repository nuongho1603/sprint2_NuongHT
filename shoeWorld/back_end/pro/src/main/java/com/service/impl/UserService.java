package com.service.impl;

import com.model.account.Account;
import com.repository.IUserRepository;
import com.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository iUserRepository;


    @Override
    public Account getUserById(Long id) {
        return iUserRepository.getUserById(id);
    }


    @Override
    public Account updateUser(Account user) {
        return iUserRepository.save(user);
    }
}
