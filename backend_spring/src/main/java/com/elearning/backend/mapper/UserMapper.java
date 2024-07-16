package com.elearning.backend.mapper;

import com.elearning.backend.dto.UserDto;
import com.elearning.backend.entity.User;

public class UserMapper {
    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getUserId(),
                userDto.getUsername(),
                userDto.getEmail(),
                userDto.getPasswordHash(),
                userDto.getCreatedAt()
        );
    }

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getUserId(),
                user.getUsername(),
                user.getEmail(),
                user.getPasswordHash(),
                user.getCreatedAt()
        );
    }
}
