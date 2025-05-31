@Entity
@Table(name = "products")
@Data // Lombok for getters/setters/toString/hashCode/equals
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;
    private int stock;
    // Getters and Setters (or use Lombok's @Data)
}
