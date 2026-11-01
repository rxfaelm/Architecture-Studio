import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
type Brief = {
  name: string;
  email: string;
  type: string;
  area: string;
  location: string;
  budget: string;
  timing: string;
};
const initial: Brief = {
  name: "",
  email: "",
  type: "Residencial",
  area: "",
  location: "",
  budget: "",
  timing: "",
};
const steps = ["Sobre você", "Seu projeto", "Investimento", "Prazo"];
export default function Briefing() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initial);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const upd = (key: keyof Brief, val: string) =>
    setData({ ...data, [key]: val });
  function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (
      step === 0 &&
      (!data.name.trim() || !/^\S+@\S+\.\S+$/.test(data.email))
    ) {
      setError("Preencha seu nome e um e-mail válido.");
      return;
    }
    if (step === 1 && (!data.area || !data.location.trim())) {
      setError("Informe a metragem aproximada e a localização.");
      return;
    }
    if (step === 2 && !data.budget) {
      setError("Escolha uma faixa de investimento.");
      return;
    }
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    if (!data.timing) {
      setError("Escolha um prazo desejado.");
      return;
    }
    setBusy(true);
    try {
      const prev = JSON.parse(localStorage.getItem("atelier-leads") || "[]");
      localStorage.setItem(
        "atelier-leads",
        JSON.stringify([
          ...prev,
          { ...data, createdAt: new Date().toISOString() },
        ]),
      );
      setDone(true);
    } catch {
      setError(
        "Não foi possível salvar neste navegador. Verifique o armazenamento local e tente novamente.",
      );
    } finally {
      setBusy(false);
    }
  }
  if (done) {
    const msg = encodeURIComponent(
      `Olá! Sou ${data.name}. Estou pensando em um projeto ${data.type.toLowerCase()} de aproximadamente ${data.area} em ${data.location}. Investimento estimado: ${data.budget}. Prazo: ${data.timing}. Meu e-mail: ${data.email}.`,
    );
    return (
      <div className="brief-success">
        <div className="success-mark">
          <Check size={24} />
        </div>
        <span className="eyebrow">BRIEFING RECEBIDO</span>
        <h3>Obrigado, {data.name.split(" ")[0]}.</h3>
        <p>
          Suas informações foram salvas neste navegador. Este é um projeto
          demonstrativo, sem backend; envie também seu resumo pelo WhatsApp para
          iniciar a conversa.
        </p>
        <a
          className="button button-dark"
          href={`https://wa.me/5511999990000?text=${msg}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={15} /> Enviar resumo pelo WhatsApp
        </a>
        <small>
          Seus dados ficam neste dispositivo e não são enviados a um servidor.
        </small>
        <button
          className="text-button"
          onClick={() => {
            setData(initial);
            setStep(0);
            setDone(false);
          }}
        >
          Enviar outro briefing
        </button>
      </div>
    );
  }
  return (
    <form className="brief-form" onSubmit={submit} noValidate>
      <div className="brief-progress">
        <div className="brief-step-label">
          <span>BRIEFING INICIAL</span>
          <span>0{step + 1} / 04</span>
        </div>
        <div className="progress-track">
          <span style={{ width: `${(step + 1) * 25}%` }} />
        </div>
        <div className="step-names">
          {steps.map((s, i) => (
            <span
              className={i === step ? "current" : i < step ? "passed" : ""}
              key={s}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="brief-fields">
        {step === 0 && (
          <>
            <label>
              Como podemos chamar você?
              <input
                autoFocus
                placeholder="Seu nome"
                value={data.name}
                onChange={(e) => upd("name", e.target.value)}
              />
            </label>
            <label>
              Seu melhor e-mail
              <input
                type="email"
                placeholder="voce@email.com"
                value={data.email}
                onChange={(e) => upd("email", e.target.value)}
              />
            </label>
          </>
        )}
        {step === 1 && (
          <>
            <fieldset>
              <legend>Que espaço vamos imaginar?</legend>
              <div className="choice-row">
                {["Residencial", "Comercial", "Interiores", "Consultoria"].map(
                  (t) => (
                    <button
                      type="button"
                      aria-pressed={data.type === t}
                      className={`choice ${data.type === t ? "selected" : ""}`}
                      onClick={() => upd("type", t)}
                      key={t}
                    >
                      {t}
                    </button>
                  ),
                )}
              </div>
            </fieldset>
            <label>
              Metragem aproximada
              <select
                value={data.area}
                onChange={(e) => upd("area", e.target.value)}
              >
                <option value="">Selecione uma faixa</option>
                <option>Até 100 m²</option>
                <option>100 – 250 m²</option>
                <option>250 – 500 m²</option>
                <option>Acima de 500 m²</option>
                <option>Ainda não sei</option>
              </select>
            </label>
            <label>
              Onde será o projeto?
              <input
                placeholder="Cidade e bairro"
                value={data.location}
                onChange={(e) => upd("location", e.target.value)}
              />
            </label>
          </>
        )}
        {step === 2 && (
          <fieldset>
            <legend>Qual investimento você imagina para esta etapa?</legend>
            <div className="option-list">
              {[
                "Até R$ 100 mil",
                "R$ 100 – 300 mil",
                "R$ 300 – 600 mil",
                "Acima de R$ 600 mil",
                "Ainda estou definindo",
              ].map((o) => (
                <button
                  type="button"
                  aria-pressed={data.budget === o}
                  className={`option ${data.budget === o ? "selected" : ""}`}
                  key={o}
                  onClick={() => upd("budget", o)}
                >
                  {o}
                  <span>{data.budget === o ? "●" : "○"}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}
        {step === 3 && (
          <>
            <fieldset>
              <legend>Quando gostaria de começar?</legend>
              <div className="choice-row choice-wrap">
                {[
                  "O quanto antes",
                  "Em 3–6 meses",
                  "Em 6–12 meses",
                  "Sem data definida",
                ].map((t) => (
                  <button
                    type="button"
                    aria-pressed={data.timing === t}
                    className={`choice ${data.timing === t ? "selected" : ""}`}
                    onClick={() => upd("timing", t)}
                    key={t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="brief-note">
              Ao enviar, seus dados serão guardados somente no armazenamento
              local deste navegador.
            </div>
          </>
        )}
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
      </div>
      <div className="brief-actions">
        {step > 0 && (
          <button
            type="button"
            className="back-button"
            onClick={() => {
              setStep(step - 1);
              setError("");
            }}
          >
            <ArrowLeft size={15} /> Voltar
          </button>
        )}
        <button
          disabled={busy}
          className="button button-dark next-button"
          type="submit"
        >
          {busy ? "Salvando…" : step === 3 ? "Concluir briefing" : "Continuar"}{" "}
          <ArrowRight size={15} />
        </button>
      </div>
    </form>
  );
}
