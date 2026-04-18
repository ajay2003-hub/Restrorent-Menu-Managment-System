package com.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

import com.restaurant.model.ContactMessage;
import com.restaurant.repository.ContactRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactRepository repo;

    // SAVE MESSAGE
    @PostMapping
    public ContactMessage saveMessage(@RequestBody ContactMessage msg) {
        msg.setCreatedAt(LocalDateTime.now().toString());
        return repo.save(msg);
    }

    // GET ALL MESSAGES (for admin later)
    @GetMapping
    public List<ContactMessage> getMessages() {
        return repo.findAll();
    }
}