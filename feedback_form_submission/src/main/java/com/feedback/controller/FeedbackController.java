package com.feedback.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.feedback.model.Feedback;
import com.feedback.repository.FeedbackRepository;

import java.util.Optional;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

	@Autowired
	private FeedbackRepository repository;

	// POST /feedback
	@PostMapping
	public ResponseEntity<?> submitFeedback(@Valid @RequestBody Feedback feedback) {
		feedback.setSubmittedAt(java.time.LocalDateTime.now());
		feedback.setStatus("Pending");
		return ResponseEntity.ok(repository.save(feedback));
	}

	// GET /feedback?page=0&size=5&search=abc
	@GetMapping
	public Page<Feedback> getFeedback(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "5") int size, @RequestParam(required = false) String search) {
		Pageable pageable = PageRequest.of(page, size, Sort.by("submittedAt").descending());
		if (search != null && !search.isEmpty()) {
			return repository.findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(search, search, pageable);
		}
		return repository.findAll(pageable);
	}

	// DELETE /feedback/{id}
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteFeedback(@PathVariable Long id) {
		if (repository.existsById(id)) {
			repository.deleteById(id);
			return ResponseEntity.ok("Deleted");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// PUT /feedback/{id}/status?status=Reviewed
	@PutMapping("/{id}/status")
	public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam String status) {
		Optional<Feedback> optional = repository.findById(id);
		if (optional.isPresent()) {
			Feedback feedback = optional.get();
			feedback.setStatus(status);
			return ResponseEntity.ok(repository.save(feedback));
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
