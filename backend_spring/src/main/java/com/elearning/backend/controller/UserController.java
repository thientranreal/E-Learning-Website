package com.elearning.backend.controller;

import com.elearning.backend.dto.UserDto;
import com.elearning.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> loginUser(@RequestBody UserDto userDto) {
        UserDto user = new UserDto();
        if (userDto.getEmail() != null) {
            user = userService.getUserByEmail(userDto.getEmail(), userDto.getPasswordHash());
        } else if (userDto.getUsername() != null) {
            user = userService.getUserByUsername(userDto.getUsername(), userDto.getPasswordHash());
        }
        return ResponseEntity.ok(user);
    }

}
