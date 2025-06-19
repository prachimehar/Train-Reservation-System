package com.train.reservationsystem.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String passengerName;
    private String source;
    private String destination;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "date_of_journey")
    private LocalDate dateOfJourney;

    private String trainNumber;
    private String seatNumber;
}
