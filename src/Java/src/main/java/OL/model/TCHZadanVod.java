package OL.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OL.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ТЧЗаданВод
 */
@Entity(name = "IISOLТЧЗаданВод")
@Table(schema = "public", name = "ТЧЗаданВод")
public class TCHZadanVod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Расстояние")
    private Double расстояние;

    @Column(name = "ДатаВремя")
    private Date датавремя;

    @Column(name = "ПунктНазнач")
    private String пунктназнач;

    @Column(name = "ПунктОтправ")
    private String пунктотправ;


    public TCHZadanVod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getРасстояние() {
      return расстояние;
    }

    public void setРасстояние(Double расстояние) {
      this.расстояние = расстояние;
    }

    public Date getДатаВремя() {
      return датавремя;
    }

    public void setДатаВремя(Date датавремя) {
      this.датавремя = датавремя;
    }

    public String getПунктНазнач() {
      return пунктназнач;
    }

    public void setПунктНазнач(String пунктназнач) {
      this.пунктназнач = пунктназнач;
    }

    public String getПунктОтправ() {
      return пунктотправ;
    }

    public void setПунктОтправ(String пунктотправ) {
      this.пунктотправ = пунктотправ;
    }


}