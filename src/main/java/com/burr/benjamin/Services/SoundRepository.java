package com.burr.benjamin.Services;

import com.burr.benjamin.entities.Sound;
import com.burr.benjamin.entities.User;

import java.util.List;

/**
 * Created by Ben on 2/12/17.
 */
public interface SoundRepository {
    List<Sound> findByName(String name);
}
