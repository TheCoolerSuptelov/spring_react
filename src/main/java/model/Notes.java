package model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name="springreact_notes")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Notes {
    @Id
    private Long id;
    @Column(name ="title")
    private String title;
    @Column(name="body")
    private String body;
    @Column(name = "category")
    private String category;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Notes notes = (Notes) o;
        return id != null && Objects.equals(id, notes.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
