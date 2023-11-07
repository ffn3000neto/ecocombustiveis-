import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";

const cards = [
  { nome: "Bombas de Gasolina(ATE-VDO)", descricao: "Tecnologia Avançada", img: "/gas.png" },
  {
    nome: "Bombas de Gasolina(BOSCH)",
    descricao: "Excelente Funcionamento",
    img: "/gas2.png",
  },
  {
    nome: "Franquia de Loja de Conveniencia (AMPM)",
    descricao: "Perto de Você",
    img: "lojinha.png",
  },
  { nome: "Equipamentos para Checagem completa", descricao: "Prevenção e Cuidado", img: "seila.png" },
  {
    nome: "Equipamentos para Troca de Oléo",
    descricao: "Área do Givas",
    img: "troca.png",
  },
];

const Home = () => {
  return (
    <div>
      <CarouselC />
      <div style={{ padding: "80px 0" }}>
        <h2>Nossos Serviços</h2>
        <div className="card-group">
          {cards.map((card, i) => (
            <CardC data={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
