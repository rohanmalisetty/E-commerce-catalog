public interface ProductRepository extends JpaRepository<Product, Long> {
    // Spring Data JPA provides CRUD methods automatically
    // You can add custom queries here if needed, e.g., List<Product> findByNameContaining(String name);
}
