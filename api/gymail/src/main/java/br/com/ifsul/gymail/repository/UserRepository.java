package br.com.ifsul.gymail.repository;

import br.com.ifsul.gymail.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    @Query(" FROM  User u " +
            "WHERE u.email      LIKE CONCAT('%', :keyword, '%') " +
            "OR    u.firstName  LIKE CONCAT('%', :keyword, '%') " +
            "OR    u.lastName   LIKE CONCAT('%', :keyword, '%') " +
            "OR    :keyword =   NULL")
    List<User> findAll(@Param("keyword") String keyword);

    User findByEmail(String email);
}
