export default function Tarifs() {
  const pricing = [
    { session: "Consultation Initiale", duration: "1 heure", price: "70€" },
    { session: "Séance de Suivi", duration: "45 minutes", price: "50€" },
    {
      session: "Forfait Bien-être (5 séances)",
      duration: "45 minutes/séance",
      price: "220€",
    },
    { session: "Séance Express", duration: "30 minutes", price: "35€" },
    { session: "Massage du Visage", duration: "30 minutes", price: "40€" },
  ];

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.header}>Tarifs des Séances de Dien Chan</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Type de Séance</th>
              <th style={styles.th}>Durée</th>
              <th style={styles.th}>Tarif</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((item, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{item.session}</td>
                <td style={styles.td}>{item.duration}</td>
                <td style={styles.td}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>Type de paiement accepté</div>
      <div>CB, Paypal, etc</div>
      <div>Prendre Rendez-vous</div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Fustat, sans-serif",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  table: { backgroundColor: "grey", width: "100%", borderCollapse: "collapse" },
  th: {
    borderBottom: "2px solid black",
    textAlign: "left",
    padding: "12px",
    backgroundColor: "blue",
  },
  tr: {
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "15px",
    fontSize: "18px",
  },
};
