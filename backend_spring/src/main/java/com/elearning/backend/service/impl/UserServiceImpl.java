package com.elearning.backend.service.impl;

import com.elearning.backend.dto.UserDto;
import com.elearning.backend.entity.User;
import com.elearning.backend.exception.EmailAlreadyExistsException;
import com.elearning.backend.exception.ResourceNotFoundException;
import com.elearning.backend.exception.UsernameAlreadyExistsException;
import com.elearning.backend.mapper.UserMapper;
import com.elearning.backend.repository.UserRepository;
import com.elearning.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto getUserByUsername(String username, String password) {
        User user = userRepository.findByUsernameAndPasswordHash(username, password).orElseThrow(
                () -> new ResourceNotFoundException("User is not existed.")
        );
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public UserDto getUserByEmail(String email, String password) {
        User user = userRepository.findByEmailAndPasswordHash(email, password).orElseThrow(
                () -> new ResourceNotFoundException("User is not existed.")
        );
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new EmailAlreadyExistsException("Email is already existed.");
        }

        if (userRepository.existsByUsername(userDto.getUsername())) {
            throw new UsernameAlreadyExistsException("Username is already existed.");
        }

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }
}
