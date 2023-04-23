import { Link } from "react-router-dom";
import "./GridHolyGrailPage.css";

function GridHolyGrailPage() {
  return (
    <>
      <header>Header</header>
      <div className="container">
        <nav>
          Navigation
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li>
              <Link to="/">Flex exercise</Link>
            </li>
          </ul>
        </nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default GridHolyGrailPage;
