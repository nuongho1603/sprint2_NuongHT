package com.service;


import com.model.account.Account;

public interface IUserService {

    Account getUserById(Long id);

    Account updateUser(Account user);
}
