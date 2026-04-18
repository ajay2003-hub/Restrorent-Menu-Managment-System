package com.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.restaurant.model.Reservation;

public interface ReservationRepository extends MongoRepository<Reservation, String> {}
