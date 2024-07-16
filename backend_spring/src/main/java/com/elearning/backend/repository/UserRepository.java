package com.elearning.backend.repository;

import com.elearning.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsernameAndPasswordHash(String username, String passwordHash);

    Optional<User> findByEmailAndPasswordHash(String email, String passwordHash);

    boolean existsByEmail(String email);

    boolean existsByUsername(String username);
}
