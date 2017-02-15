package com.burr.benjamin.controllers;

import com.burr.benjamin.Services.SoundRepository;
import com.burr.benjamin.Services.UserRepository;
import com.burr.benjamin.entities.Sound;
import com.burr.benjamin.entities.User;
import com.burr.benjamin.utilities.PasswordStorage;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Ben on 2/7/17. Remember user.getFavorites().
 */

@RestController
public class DrumCircleController {
    @Autowired
    UserRepository users;

    @Autowired
    SoundRepository sounds;

    @RequestMapping(path = "/sounds", method = RequestMethod.GET)
    public Iterable<Sound> sound() {
        return sounds.findAll();
    }

    @RequestMapping(path = "file-test", method = RequestMethod.GET)
    public List<String> testFiles() {

        List<File> files  =  (List)FileUtils.listFiles(new File("test-sounds"), null, true);

        return files.stream().map(f -> {
            String[] parts = f.getAbsolutePath().split("\\/");

            // parts[parts.length - 2] gives you the category
            // "/test-sounds/" + parts[parts.length - 2] + "/" + parts[parts.length - 1]; gives you the relative path
            // (which you can hit from a browser)

            return "/test-sounds/" + parts[parts.length - 2] + "/" + parts[parts.length - 1];
        }).collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public String user(HttpSession session) {
        Integer userId = (Integer) session.getAttribute("user");

        if (userId != null) {
            User user = users.findOne(userId);

            return user.getUsername();
        } else {
            return "";
        }
    }
}
