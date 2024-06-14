package com.example.demo.board.dto;

import com.example.demo.board.entity.Post;
import com.example.demo.member.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;

@Builder
@AllArgsConstructor
public class CreatePostDto {

	@Not
	private String title;
	private String content;

	public Post toEntity(Member member) {
		return Post.builder()
			.title(title)
			.content(content)
			.writer(member)
			.build();

	}
}
