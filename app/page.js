import "./styles.css";


export default function Home() {
  return (
    <div className="m-wrapper">
      <h1>Pizza Order</h1>
      <input type="text" placeholder="User name" />
      <br />
      <input type="tel" placeholder="Phone number" />
      <br />
      <input type="text" placeholder="User address" />
      <br />
      <label>
        Dough thickness:
        <select>
          <option>thin</option>
          <option>medium</option>
          <option>thick</option>
        </select>
      </label>
      <br />
      <label>
        Size:
        
          <div className="selection-boxes" onClick="select25(this)">25 sm</div>
          <div className="selection-boxes" onClick="select30(this)">30 sm</div>
          <div className="selection-boxes" onClick="select35(this)">35 sm</div>
        
      </label>      
    </div>
  );
}
