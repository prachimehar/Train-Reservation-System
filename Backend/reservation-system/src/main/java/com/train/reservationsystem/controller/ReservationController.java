package com.train.reservationsystem.controller;

import com.train.reservationsystem.entity.Reservation;
import com.train.reservationsystem.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend on port 3000
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getAllReservations() {
        try {
            return reservationService.getAllReservations();
        } catch (Exception e) {
            e.printStackTrace(); // log it
            throw new RuntimeException("Failed to fetch reservations: " + e.getMessage());
        }
    }

    @PostMapping
    public Reservation createReservation(@RequestBody Reservation reservation) {
        return reservationService.createReservation(reservation);
    }

    @PutMapping("/{id}")
    public Optional<Reservation> updateReservation(
            @PathVariable Long id,
            @RequestBody Reservation updatedReservation) {
        return reservationService.updateReservation(id, updatedReservation);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationService.deleteReservation(id);
    }
}
