import { useState } from "react";

const ComingSoon = () => {
  const [activeFeature, setActiveFeature] = useState("jeux");
  const [subscribed, setSubscribed] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const features = {
    jeux: {
      icon: "🎯",
      title: "Jeux concours",
      tagline: "Engagez vos clients avec des jeux concours viraux",
      description: "Créez des jeux concours personnalisés pour générer du trafic, récolter des données clients et booster votre visibilité sur les réseaux sociaux. Tirage au sort automatique, partage viral intégré.",
      advantages: [
        { icon: "🚀", title: "Viralité intégrée", desc: "Vos clients partagent le concours pour gagner des chances supplémentaires" },
        { icon: "📊", title: "Collecte de données", desc: "Récupérez emails, téléphones et préférences de vos participants" },
        { icon: "🎁", title: "Lots personnalisables", desc: "Définissez vos propres lots et conditions de participation" },
        { icon: "⚡", title: "Tirage automatique", desc: "Tirage au sort automatique et notification des gagnants par email" },
      ],
      color: "#e67e22",
      bgLight: "#fef6ee",
    },
    marketing: {
      icon: "📣",
      title: "Marketing",
      tagline: "Fidélisez vos clients avec des campagnes ciblées",
      description: "Envoyez des campagnes SMS et email personnalisées à votre base clients. Segmentation intelligente, templates prêts à l'emploi et suivi des performances en temps réel.",
      advantages: [
        { icon: "📱", title: "SMS & Email", desc: "Deux canaux puissants pour toucher vos clients au bon moment" },
        { icon: "🎯", title: "Segmentation", desc: "Ciblez par fréquence de visite, montant dépensé ou préférences" },
        { icon: "📝", title: "Templates prêts", desc: "Des modèles optimisés pour la restauration et le commerce local" },
        { icon: "📈", title: "Suivi en temps réel", desc: "Taux d'ouverture, clics et conversions en un coup d'œil" },
      ],
      color: "#2a2151",
      bgLight: "#f3f0ff",
    },
    visibilite: {
      icon: "🔍",
      title: "Visibilité IA",
      tagline: "Suivez votre présence sur les moteurs IA",
      description: "Découvrez comment votre établissement apparaît dans les réponses de ChatGPT, Gemini, Perplexity et autres IA. Recevez des alertes et des recommandations pour améliorer votre visibilité.",
      advantages: [
        { icon: "🤖", title: "Monitoring IA", desc: "Suivez vos mentions sur ChatGPT, Gemini, Perplexity et Claude" },
        { icon: "📍", title: "Requêtes locales", desc: "Voyez si l'IA vous recommande pour « restaurant italien à Lyon »" },
        { icon: "🔔", title: "Alertes", desc: "Soyez notifié quand votre établissement est mentionné par une IA" },
        { icon: "💡", title: "Recommandations", desc: "Des conseils concrets pour améliorer votre référencement IA" },
      ],
      color: "#059669",
      bgLight: "#ecfdf5",
    },
  };

  const current = features[activeFeature];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Inter', -apple-system, sans-serif", background: "#f5f5f5" }}>
      {/* SIDEBAR */}
      <div style={{ width: 210, background: "#1a1a1a", display: "flex", flexDirection: "column", padding: "20px 0", flexShrink: 0 }}>
        <div style={{ padding: "0 20px 24px", fontSize: 20, fontWeight: 800, color: "#fff", fontStyle: "italic", letterSpacing: 2 }}>CADEO</div>
        {[
          { icon: "🏠", label: "Accueil" },
          { icon: "🎡", label: "Roue Boost" },
          { icon: "⭐", label: "E-réputation" },
          { icon: "🎯", label: "Jeux concours", soon: true, active: activeFeature === "jeux" },
          { icon: "📣", label: "Marketing", soon: true, active: activeFeature === "marketing" },
          { icon: "🔍", label: "Visibilité IA", soon: true, active: activeFeature === "visibilite" },
          { icon: "👥", label: "Données clients" },
          { icon: "👤", label: "Utilisateurs" },
          { icon: "💬", label: "Assistance" },
        ].map(item => (
          <div key={item.label} onClick={() => {
            if (item.label === "Jeux concours") setActiveFeature("jeux");
            if (item.label === "Marketing") setActiveFeature("marketing");
            if (item.label === "Visibilité IA") setActiveFeature("visibilite");
          }} style={{ padding: "11px 20px", display: "flex", alignItems: "center", gap: 10, cursor: item.soon ? "pointer" : "pointer", background: item.active ? "#2a2151" : "transparent", color: item.active ? "#fff" : item.soon ? "#555" : "#999", fontSize: 14, fontWeight: item.active ? 600 : 400, borderLeft: item.active ? "3px solid #F5A623" : "3px solid transparent" }}>
            <span style={{ fontSize: 16 }}>{item.icon}</span> {item.label}
            {item.soon && !item.active && <span style={{ marginLeft: "auto", padding: "2px 8px", borderRadius: 8, background: "#333", color: "#999", fontSize: 9, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>Bientôt</span>}
          </div>
        ))}
        <div style={{ marginTop: "auto", padding: "14px 20px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid #333" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2a2151", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>E</div>
          <span style={{ color: "#ccc", fontSize: 13 }}>Emilien</span>
          <span style={{ marginLeft: "auto", color: "#666", fontSize: 12 }}>⌃</span>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ padding: "20px 36px", background: "#fff", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>{current.title}</h1>
            <span style={{ padding: "4px 12px", borderRadius: 8, background: "#f5f5f5", fontSize: 11, fontWeight: 600, color: "#999" }}>Bientôt</span>
          </div>
          <button style={{ padding: "9px 18px", borderRadius: 8, border: "1.5px solid #eee", background: "#fff", color: "#555", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>← Accueil</button>
        </div>
        <div style={{ height: 3, background: "#1a1a1a", opacity: 0.15 }} />

        <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 36px" }}>
          {/* HERO */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ width: 72, height: 72, borderRadius: 20, background: current.bgLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 20px" }}>{current.icon}</div>
            <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, background: current.bgLight, fontSize: 12, fontWeight: 600, color: current.color, marginBottom: 16 }}>Prochainement disponible</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#1a1a1a", margin: "0 0 10px" }}>{current.title}</h2>
            <p style={{ fontSize: 17, color: "#888", margin: "0 0 8px", fontWeight: 500 }}>{current.tagline}</p>
            <p style={{ fontSize: 14, color: "#999", lineHeight: 1.6, margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>{current.description}</p>
          </div>

          {/* ADVANTAGES */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
            {current.advantages.map((a, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "22px 24px", border: "1px solid #eee", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: current.bgLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{a.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>{a.title}</div>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.45, margin: 0 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* NOTIFICATION SIGNUP */}
          <div style={{ textAlign: "center" }}>
            {subscribed[activeFeature] ? (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 12, background: "#ecfdf5", border: "1px solid #d1fae5" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#059669" }}>Vous serez notifié dès le lancement !</span>
              </div>
            ) : (
              <button onClick={() => { setSubscribed({ ...subscribed, [activeFeature]: true }); setShowSuccess(true); setTimeout(() => setShowSuccess(false), 3000); }} style={{ padding: "16px 36px", borderRadius: 12, border: "none", background: "#1a1a1a", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10 }}>
                🔔 Me notifier au lancement
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SUCCESS TOAST */}
      {showSuccess && (
        <div style={{ position: "fixed", bottom: 24, right: 24, padding: "14px 24px", borderRadius: 12, background: "#059669", color: "#fff", fontSize: 14, fontWeight: 600, boxShadow: "0 8px 24px rgba(5,150,105,0.3)", display: "flex", alignItems: "center", gap: 8, zIndex: 1000, animation: "slideIn 0.3s ease" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
          Inscription enregistrée !
        </div>
      )}

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        @keyframes slideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default ComingSoon;
