package com.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.restaurant.model.ContactMessage;

public interface ContactRepository extends MongoRepository<ContactMessage, String> {
}