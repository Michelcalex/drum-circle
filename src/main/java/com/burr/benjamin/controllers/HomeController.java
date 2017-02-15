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

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by Ben on 2/13/17.
 */

@Controller
public class HomeController {

    @Autowired
    UserRepository users;

    @CrossOrigin
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(HttpSession session, Model model) {
        Integer userId = (Integer) session.getAttribute("user");

        if (userId != null) {

            User user = users.findOne(userId);
            model.addAttribute("user", user);
            return "index";
        } else {
            return "start";
        }
    }
// the answer to the ultimate question of life, the universe, and everything

    @CrossOrigin
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public String login(HttpSession session, String username, String password) throws Exception {
        User user = users.findByUsername(username);

        if (user != null && PasswordStorage.verifyPassword(password, user.getPassword())) {
            session.setAttribute("user", user.getId());
        }
        return "redirect:/";
    }

    @RequestMapping(path = "/sign-up", method = RequestMethod.GET)
    public String signUp(HttpSession session) {
        return "start";
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
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session, HttpServletResponse response) throws IOException {
        session.invalidate();
        response.sendRedirect("/");
    }

    @CrossOrigin
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User user(HttpSession session, Model model) {
        Integer userId = (Integer) session.getAttribute("user");
        User user = users.findOne(userId);

        return user;
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

}
