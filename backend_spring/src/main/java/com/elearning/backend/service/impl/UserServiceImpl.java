package com.elearning.backend.service.impl;

import com.elearning.backend.dto.UserDto;
import com.elearning.backend.entity.User;
import com.elearning.backend.exception.ConflictException;
import com.elearning.backend.exception.ResourceNotFoundException;
import com.elearning.backend.mapper.UserMapper;
import com.elearning.backend.repository.UserRepository;
import com.elearning.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto getUserByUsername(String username, String password) {
        String passwordHash = passwordEncoder.encode(password);
        User user = userRepository.findByUsernameAndPasswordHash(username, passwordHash).orElseThrow(
                () -> new ResourceNotFoundException("User is not existed.")
        );
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public UserDto getUserByEmail(String email, String password) {
        String passwordHash = passwordEncoder.encode(password);
        User user = userRepository.findByEmailAndPasswordHash(email, passwordHash).orElseThrow(
                () -> new ResourceNotFoundException("User is not existed.")
        );
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new ConflictException("Email is already existed.");
        }

        if (userRepository.existsByUsername(userDto.getUsername())) {
            throw new ConflictException("Username is already existed.");
        }

        User user = UserMapper.mapToUser(userDto);
        user.setPasswordHash(passwordEncoder.encode(userDto.getPasswordHash()));
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }
}
