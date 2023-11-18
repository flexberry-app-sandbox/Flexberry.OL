package OL.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OL.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Контрагент
 */
@Entity(name = "IISOLКонтрагент")
@Table(schema = "public", name = "Контрагент")
public class Kontragent {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Организация")
    private String организация;

    @Column(name = "ОтветсЛицо")
    private String ответслицо;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHZadanVod")
    @Convert("TCHZadanVod")
    @Column(name = "ТЧЗаданВод", length = 16, unique = true, nullable = false)
    private UUID _tchzadanvodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHZadanVod", insertable = false, updatable = false)
    private TCHZadanVod tchzadanvod;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RukOtdLog")
    @Convert("RukOtdLog")
    @Column(name = "РукОтдЛог", length = 16, unique = true, nullable = false)
    private UUID _rukotdlogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RukOtdLog", insertable = false, updatable = false)
    private RukOtdLog rukotdlog;


    public Kontragent() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОрганизация() {
      return организация;
    }

    public void setОрганизация(String организация) {
      this.организация = организация;
    }

    public String getОтветсЛицо() {
      return ответслицо;
    }

    public void setОтветсЛицо(String ответслицо) {
      this.ответслицо = ответслицо;
    }


}