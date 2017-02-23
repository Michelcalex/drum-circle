package com.burr.benjamin.controllers;

import com.burr.benjamin.Services.SoundRepository;
import com.burr.benjamin.Services.UserRepository;
import com.burr.benjamin.entities.Sound;
import com.burr.benjamin.entities.User;
import com.burr.benjamin.utilities.PasswordStorage;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * Created by Ben on 2/13/17.
 */

@Controller
public class HomeController {

    @Autowired
    UserRepository users;

    @Autowired
    SoundRepository sounds;

    @CrossOrigin
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(HttpSession session, Model model) {

        Integer userId = (Integer) session.getAttribute("user");

        model.addAttribute("success", session.getAttribute("success"));
        session.removeAttribute("success");
        if (userId != null) {
            User user = users.findOne(userId);
            model.addAttribute("user", user);

            return "index";
        } else {
            if (session.getAttribute("error") != null) {
                model.addAttribute("error", session.getAttribute("error"));
                session.removeAttribute("error");
            }


            return "start";
        }
    }

    @CrossOrigin
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public String login(Model model, HttpSession session, String username, String password) throws Exception {
        User user = users.findByUsername(username);
        if (user != null && PasswordStorage.verifyPassword(password, user.getPassword())) {
            session.setAttribute("user", user.getId());
        } else {
            session.setAttribute("error", "You entered an invalid username or password.");
        }
        return "redirect:/";
    }

    @CrossOrigin
    @RequestMapping(path = "/sign-up", method = RequestMethod.GET)
    public String signUp(HttpSession session) {
        return "start";
    }

    @CrossOrigin
    @RequestMapping(path = "/sign-up", method = RequestMethod.POST)
    public String signUp(HttpSession session, Model model, String username, String password) throws Exception{
        User user = users.findByUsername(username);
        if (user == null) {
            try {
                user = new User(username, PasswordStorage.createHash(password));
                users.save(user);
                session.setAttribute("success", "Awesome sauce! Now please Login.");
            } catch (PasswordStorage.CannotPerformOperationException e) {
                e.printStackTrace();
            }
        } else {
            session.setAttribute("error", "Username already exists.");
        }
        return "redirect:/";
    }

    @CrossOrigin
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
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
        this.initSounds();
    }

    public void initSounds() {
        if (sounds.count() == 0) {

            List<File> files = (List) FileUtils.listFiles(new File("test-sounds"), null, true);

                files.stream().filter(file -> !file.getName().equals(".DS_Store")).forEach(f -> {
                    String[] parts = f.getAbsolutePath().split("\\/");

                    Sound sound = new Sound();
                    // parts[parts.length - 2] gives you the category
                    // "/test-sounds/" + parts[parts.length - 2] + "/" + parts[parts.length - 1]; gives you the relative path
                    // (which you can hit from a browser)

                    String category = parts[parts.length - 2];
                    String name = parts[parts.length - 1];
                    String fullPath = "/test-sounds/" + parts[parts.length - 2] + "/" + parts[parts.length - 1];

                    sound.setName(name);
                    sound.setCategory(category);
                    sound.setFilePath(fullPath);
                    sounds.save(sound);

                });
        }
    }

    public ModelAndView error () throws Exception {
        ModelAndView model = new ModelAndView();
        model.addObject("error", true);


        return model;
    }
}
