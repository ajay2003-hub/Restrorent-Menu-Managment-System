package com.restaurant.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.restaurant.model.MenuItem;
import com.restaurant.repository.MenuRepository;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin
public class AiController {

    @Autowired
    private MenuRepository repo;

    @GetMapping("/suggest")
    public List<MenuItem> suggest(@RequestParam String query) {

        List<MenuItem> all = repo.findAll();

        final String lowerCaseQuery = query.toLowerCase();

        return all.stream().filter(item -> {

            if (lowerCaseQuery.contains("veg") && !item.isVeg()) return false;
            if (lowerCaseQuery.contains("spicy") && !item.isSpicy()) return false;
            if (lowerCaseQuery.contains("popular") && !item.isPopular()) return false;

            if (lowerCaseQuery.contains("sweet") || lowerCaseQuery.contains("meetha")) {
                return item.getCategory().equalsIgnoreCase("Dessert");
            }

            if (lowerCaseQuery.contains("drink")) {
                return item.getCategory().equalsIgnoreCase("Drinks");
            }

            return true;

        }).collect(Collectors.toList());
    }
}