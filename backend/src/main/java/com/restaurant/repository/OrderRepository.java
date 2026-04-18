package com.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.restaurant.model.Order;

public interface OrderRepository extends MongoRepository<Order, String> {
}