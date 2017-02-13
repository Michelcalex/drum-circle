package com.burr.benjamin.controllers;

import com.burr.benjamin.Services.UserRepository;
import com.burr.benjamin.entities.User;
import com.burr.benjamin.utilities.PasswordStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Created by Ben on 2/7/17.
 */

@RestController
public class DrumCircleController {
    @Autowired
    UserRepository users;

//    @Autowired
//    SoundRepository sounds;

    @CrossOrigin
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(HttpSession session, Model model) {
        String username = (String) session.getAttribute("username");
        User user = users.findByUsername(username);
        if (user != null) {
            System.out.println("welcome");
            //The secret of life
            return "redirect:/index.html";
        } else {
            System.out.println("not logged in.");
            return "redirect:/start.html";
        }
    }


    @CrossOrigin
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public String login(HttpSession session, String username, String password) throws Exception {
        User user = users.findByUsername(username);
        if (user == null) {
            throw new Exception("User Name does not exist. Please create an account.");
        } else if (!PasswordStorage.verifyPassword(password, user.getPassword())) {
            throw new Exception("Incorrect password.");
        }
        session.setAttribute("username", username);
        return "redirect:/";
    }

    @CrossOrigin
    @RequestMapping(path = "/sign-up", method = RequestMethod.POST)
    public String signUp(HttpSession session, String username, String password) {
        try {
            
            User user = new User(username, PasswordStorage.createHash(password));
            users.save(user);
        } catch (PasswordStorage.CannotPerformOperationException e) {
            e.printStackTrace();
        }
        return "redirect:/";
    }

    @CrossOrigin
    @RequestMapping("/logout")
    public void logout(HttpSession session, HttpServletResponse response) throws IOException {
        session.invalidate();
        response.sendRedirect("/");
    }

    @PostConstruct
    public void init() {
        if (users.count() == 0) {
            User user = new User();
            user.setUsername("bburrva");
            try {
                user.setPassword(PasswordStorage.createHash("1234"));
            } catch (PasswordStorage.CannotPerformOperationException e) {
                e.printStackTrace();
            }
            users.save(user);
        }
    }

//    @CrossOrigin
//    @RequestMapping("/sounds")
//    public List<Sound> showSounds(HttpSession session) throws Exception {
//        String username = (String) session.getAttribute("username");
//        if (username == null) {
//            throw new Exception("Not logged in");
//        }
//        return null;
//    }
}
