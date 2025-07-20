function Product({ name, price, diskon = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <s>Rp {price}</s> ({diskon}%)
      </p>
      <p>
        <b>
          Rp {parseInt(price) - parseInt(price) * (parseInt(diskon) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
}
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [diskon, setDiskon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      diskon,
    };
    setProducts([...products, newProduct]);
    // Reset input
    setName("");
    setPrice("");
    setDiskon("");
  };

  // Bisa ganti ini pakai `for` juga kalau mau
  const renderedProducts = [];
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    renderedProducts.push(
      <Product
        key={i}
        name={p.name}
        price={p.price}
        diskon={p.diskon}
      />

export default  Product