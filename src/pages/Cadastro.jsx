import  { useState } from "react";
import { Button } from "react-bootstrap";
import "./ProductForm.css"; // Importe seu arquivo de estilo CSS aqui

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [receiveDate, setReceiveDate] = useState("");
  const [stockLiters, setStockLiters] = useState("");

  const cadastrarProduto = (e) => {
    e.preventDefault();
    console.log("Nome do Produto: " + productName);
    console.log("Descrição do Produto: " + productDescription);
    console.log("Tipo do Produto: " + productType);
    console.log("Data de Recebimento: " + receiveDate);
    console.log("Litros em Estoque: " + stockLiters);
  };

  return (
    <div className="product-form-container">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={cadastrarProduto}>
        <label>
          <span>Nome do Produto</span>
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Descrição do Produto</span>
          <textarea
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Tipo do Produto</span>
          <input
            type="text"
            value={productType}
            onChange={(e) => {
              setProductType(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Data de Recebimento</span>
          <input
            type="date"
            value={receiveDate}
            onChange={(e) => {
              setReceiveDate(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Litros em Estoque</span>
          <input
            type="number"
            value={stockLiters}
            onChange={(e) => {
              setStockLiters(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <Button type="submit" className="btn btn-primary">Cadastrar Produto</Button>
      </form>
    </div>
  );
};

export default ProductForm;
