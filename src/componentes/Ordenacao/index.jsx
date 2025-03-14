import "./styles.css";
export default function Ordenacao() {
  return (
    <ul className="lista-ordenacao">
      <li>
        <a
          href=""
          className="lista-ordenacao__link lista-ordenacao__link--ativo"
        >
          Explorar
        </a>
      </li>
      <li>
        <a href="" className="lista-ordenacao__link">
          Seguindo
        </a>
      </li>
    </ul>
  );
}
