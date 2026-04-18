package com.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

import com.restaurant.model.Order;
import com.restaurant.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderRepository repo;

    // CREATE ORDER
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        order.setCreatedAt(LocalDateTime.now().toString());
        return repo.save(order);
    }

    // GET ALL ORDERS
    @GetMapping
    public List<Order> getOrders() {
        return repo.findAll();
    }
}