package com.train.reservationsystem.services;

import com.train.reservationsystem.entity.Reservation;
import com.train.reservationsystem.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll(); // Might throw error if null or DB issue
    }

    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public Optional<Reservation> updateReservation(Long id, Reservation updatedReservation) {
        return reservationRepository.findById(id).map(reservation -> {
            reservation.setPassengerName(updatedReservation.getPassengerName());
            reservation.setSource(updatedReservation.getSource());
            reservation.setDestination(updatedReservation.getDestination());
            reservation.setDateOfJourney(updatedReservation.getDateOfJourney());
            reservation.setTrainNumber(updatedReservation.getTrainNumber());
            reservation.setSeatNumber(updatedReservation.getSeatNumber());
            return reservationRepository.save(reservation);
        });
    }

    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }
}
