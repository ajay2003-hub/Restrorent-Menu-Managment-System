package com.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.restaurant.model.MenuItem;
import com.restaurant.repository.MenuRepository;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin("*")
public class MenuController {

    @Autowired
    private MenuRepository repo;

    // GET all menu
    @GetMapping
    public List<MenuItem> getAllMenu() {
        return repo.findAll();
    }

    // ADD menu item
    @PostMapping
    public MenuItem addItem(@RequestBody MenuItem item) {
        return repo.save(item);
    }
}