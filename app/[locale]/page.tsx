import React from 'react';
import { dict, Locale } from '../../lib/dictionaries';
import ContactForm from '../../components/ContactForm';

export default function Page({ params }: { params: { locale: Locale } }) {
  const d = dict[params.locale];
  return (
    <main>
      <section className="section" id="hero">
        <div className="kicker">{d.brand}</div>
        <h1>{d.hero_title}</h1>
        <p className="lead">{d.hero_lead}</p>
        <p><strong>{d.hero_claim}</strong></p>
        <div style={{marginTop:12}}>
          <a href="#contact" className="button">{d.contact_btn}</a>
        </div>
      </section>

      <section className="section" id="phases">
        <h2>{d.phases_title}</h2>
        <div className="grid grid-2" style={{marginTop: 14}}>
          <div className="card">
            <h3>{d.p1_title}</h3>
            <p>{d.p1_text}</p>
            <ul className="list">
              <li>{d.p1_list_1}</li>
              <li>{d.p1_list_2}</li>
              <li>{d.p1_list_3}</li>
            </ul>
            <p><span className="badge">{d.p1_result}</span> {d.p1_result_text}</p>
          </div>
          <div className="card">
            <h3>{d.p2_title}</h3>
            <p>{d.p2_text}</p>
            <ul className="list">
              <li>{d.p2_list_1}</li>
              <li>{d.p2_list_2}</li>
              <li>{d.p2_list_3}</li>
              <li>{d.p2_list_4}</li>
            </ul>
            <p className="small"><strong>{d.p2_note}</strong></p>
          </div>
        </div>
      </section>

      <section className="section" id="cta">
        <h2>{d.cta_title}</h2>
        <div className="grid grid-2" style={{marginTop:14}}>
          <div className="card">
            <h3>{d.cta1_title}</h3>
            <p>{d.cta1_text}</p>
            <p><span className="badge">{d.cta1_deliverable}</span> Diagnostic</p>
            <p><a href="#contact" className="button">{d.cta1_btn}</a></p>
          </div>
          <div className="card">
            <h3>{d.cta2_title}</h3>
            <p>{d.cta2_text}</p>
            <p><span className="badge">{d.cta2_deliverables}</span> diagnostic, blueprint, API/modules, risk matrix</p>
            <p><a href="#contact" className="button">{d.cta2_btn}</a></p>
          </div>
        </div>
        <div className="card" style={{marginTop:16}}>
          <h3>{d.cta3_title}</h3>
          <p>{d.cta3_text}</p>
          <p><a href="#contact" className="button">{d.cta3_btn}</a></p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>{d.contact_title}</h2>
        <p>{d.contact_intro} <strong>{d.contact_email}</strong> {d.contact_or}</p>
        <ContactForm dictKey={params.locale} />
      </section>

      <footer className="footer">
        <hr className="hr" />
        <p>© {new Date().getFullYear()} Asplenz. {d.footer_rights}</p>
      </footer>
    </main>
  );
}
