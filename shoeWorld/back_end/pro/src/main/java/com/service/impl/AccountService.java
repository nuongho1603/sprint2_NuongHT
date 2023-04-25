package com.service.impl;

import com.model.account.Account;
import com.repository.IAccountRepository;
import com.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository iAccountRepository;
    @Override
    public Account getNameUser(Long idAccount) {
        return iAccountRepository.getNameUser(idAccount);
    }
}
