package com.burr.benjamin.entities;

import javax.persistence.*;

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
    String filePath;

    public Sound() {
    }

    public Sound(String name, String category, String filePath) {
        this.name = name;
        this.category = category;
        this.filePath = filePath;
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

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

}
