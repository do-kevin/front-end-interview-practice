import { Link } from "react-router-dom";
import "./FlexHolyGrailPage.css";

function FlexHolyGrailPage() {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <nav>
          Navigation
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li>
              <Link to="/grid">CSS Grid exercise</Link>
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

export default FlexHolyGrailPage;
