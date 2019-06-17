package br.com.ifsul.gymail.repository;

import br.com.ifsul.gymail.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    @Query("FROM Message m " +
            "WHERE (m.recipient  LIKE  :userPrincipal " +
            "OR     m.sender     LIKE  :userPrincipal) " +
            "AND    m.deleted    =     :deletedMessage " +
            "AND    m.read       =     :read " +
            "AND   (m.subject    LIKE  CONCAT('%', :keyword, '%') " +
            "OR     m.content    LIKE  CONCAT('%', :keyword, '%') " +
            "OR     :keyword     =     NULL)" +
            "ORDER BY m.dateTime DESC")
    List<Message> findAll(@Param("keyword") String keyword, @Param("userPrincipal") String userPrincipal, @Param("deletedMessage") boolean deletedMessage, @Param("read") boolean read);

    @Query("FROM Message m " +
            "WHERE  m.id        =    :id " +
            "AND   (m.sender    LIKE :userPrincipal " +
            "OR     m.recipient LIKE :userPrincipal)")
    Message findById(@Param("id") Long id, @Param("userPrincipal") String userPrincipal);

    @Query("SELECT COUNT(m) FROM Message m " +
            "WHERE m.recipient LIKE :userPrincipal " +
            "AND   m.read      =    false " +
            "AND   m.deleted   =    false")
    int findNumberOfUnreadMessage(@Param("userPrincipal") String userPrincipal);
}
