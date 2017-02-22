package com.burr.benjamin.Services;

import com.burr.benjamin.entities.Sound;
import com.burr.benjamin.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Ben on 2/7/17.
 */
public interface UserRepository extends CrudRepository<User, Integer>{
    User findByUsername(String username);
}
