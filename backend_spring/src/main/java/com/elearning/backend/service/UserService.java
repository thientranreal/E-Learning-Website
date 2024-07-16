package com.elearning.backend.service;

import com.elearning.backend.dto.UserDto;

public interface UserService {
    UserDto getUserByUsername(String username, String password);

    UserDto getUserByEmail(String email, String password);

    UserDto createUser(UserDto userDto);
}
