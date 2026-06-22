package com.feedback.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.feedback.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	Page<Feedback> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(String name, String email,
			Pageable pageable);
}
