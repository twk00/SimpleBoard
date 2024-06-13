package com.example.demo.board.entity;

import com.example.demo.config.BaseTimeEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Board extends BaseTimeEntity {

	@Id
	private Long id;

	private String title;
	private String content;

	private String fileName;
	private String filePath;

}
