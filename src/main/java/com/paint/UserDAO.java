package com.paint;

import java.sql.Date;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional 
public interface UserDAO extends CrudRepository<Image, Long> {
	
	public Image findById (int id);
	public Image findByDate (Date date);
}
