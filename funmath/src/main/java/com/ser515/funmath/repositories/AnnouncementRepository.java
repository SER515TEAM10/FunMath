package com.ser515.funmath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ser515.funmath.model.AnnouncementsModel;


@Repository
public interface AnnouncementRepository extends JpaRepository<AnnouncementsModel, Integer> {

}