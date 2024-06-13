package com.example.demo.member.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.board.entity.Board;
import com.example.demo.member.entity.Member;

import lombok.RequiredArgsConstructor;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

	Optional<Member> findByUsername(String username);
	Boolean existsByUsername(String username);
}
