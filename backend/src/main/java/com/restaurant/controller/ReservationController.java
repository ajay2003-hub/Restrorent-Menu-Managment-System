package com.restaurant.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.restaurant.model.Reservation;
import com.restaurant.repository.ReservationRepository;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin("*")
public class ReservationController {

    @Autowired
    private ReservationRepository repo;

    @PostMapping
    public Reservation save(@RequestBody Reservation r){
        return repo.save(r);
    }
}
