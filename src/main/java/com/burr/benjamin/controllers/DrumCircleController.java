package com.burr.benjamin.controllers;

import com.burr.benjamin.Services.SoundRepository;
import com.burr.benjamin.Services.UserRepository;
import com.burr.benjamin.entities.Sound;
import com.burr.benjamin.entities.User;
import com.burr.benjamin.utilities.PasswordStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Created by Ben on 2/7/17. Remember user.getFavorites().
 */

@RestController
public class DrumCircleController {
    @Autowired
    UserRepository users;
}
