package com.burr.benjamin.Services;

import com.burr.benjamin.entities.Sound;
import com.burr.benjamin.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Ben on 2/12/17.
 */
public interface SoundRepository extends CrudRepository<Sound, Integer>{
    List<Sound> findAll(Iterable<Integer> id);
    Sound findById(Integer id);
}
