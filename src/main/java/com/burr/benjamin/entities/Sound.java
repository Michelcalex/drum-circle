package com.burr.benjamin.entities;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Ben on 2/9/17.
 */

@Entity
@Table(name = "sounds")
public class Sound {

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    String category;

    @Column(nullable = false)
    String fileName;

    @ManyToMany
    List<User> favorite;

    public Sound() {
    }

    public Sound(String name, String category, String fileName, User favorite) {
        this.name = name;
        this.category = category;
        this.fileName = fileName;
        this.favorite = favorite;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public User getFavorite() {
        return favorite;
    }

    public void setFavorite(User favorite) {
        this.favorite = favorite;
    }
}
