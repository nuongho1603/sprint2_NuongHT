package com.service;

import com.model.account.Account;
import org.springframework.data.repository.query.Param;

public interface IAccountService {
    Account getNameUser( Long idAccount);
}
