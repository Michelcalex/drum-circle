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
    
}
