import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { projects, photo } from "./data";
import type { Project } from "./data";
import { Header, Footer, WhatsApp } from "./components/Shell";
import Briefing from "./components/Briefing";
function ScrollTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
function SEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
  return null;
}
function Eyebrow({ children, number }: { children: string; number: string }) {
  return (
    <div className="eyebrow-row">
      <span className="eyebrow">{children}</span>
      <span className="eyebrow-number">{number}</span>
    </div>
  );
}
function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Link
      className={`project-card project-card-${index % 3}`}
      to={`/projetos/${p.slug}`}
    >
      <div className="project-image-wrap">
        <img
          src={photo(p.image, 1000)}
          alt={`${p.title} — ${p.category.toLowerCase()} em ${p.place}`}
          loading="lazy"
        />
        <span className="project-arrow">
          <ArrowUpRight size={17} />
        </span>
      </div>
      <div className="project-info">
        <div>
          <h3>{p.title}</h3>
          <p>{p.place}</p>
        </div>
        <span className="project-type">
          {p.category.toUpperCase()} <i>·</i> {p.year}
        </span>
      </div>
    </Link>
  );
}
function Home() {
  return (
    <>
      <SEO
        title="ATELIER STUDIO — Arquitetura com presença"
        description="Arquitetura atenta ao lugar, à luz e ao tempo. Conheça projetos residenciais, comerciais e interiores do ATELIER STUDIO."
      />
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker">
            <span className="tiny-dot" /> ESTÚDIO DE ARQUITETURA · SÃO PAULO
          </span>
          <h1>
            Espaços que
            <br />
            criam <em>sentido.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Arquitetura atenta ao lugar,
              <br />à luz e ao tempo.
            </p>
            <Link
              className="circle-link"
              to="/projetos"
              aria-label="Explorar projetos"
            >
              <ArrowDown size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={photo("photo-1600210492486-724fe5c67fb0", 1800)}
            alt="Interior sereno com luz natural, madeira e pedra"
            fetchPriority="high"
          />
          <div className="hero-image-caption">
            <span>CASA ENTRE ÁRVORES</span>
            <span>MANTIQUEIRA · SP&nbsp;&nbsp; 2025</span>
          </div>
          <div className="hero-index">
            01 <span>/</span> 04
          </div>
        </div>
      </section>
      <section className="intro section-wrap">
        <Eyebrow number="01 / 04">NOSSA PRÁTICA</Eyebrow>
        <div className="intro-body">
          <h2>
            Projetar é prestar atenção.
            <br />
            <em>Ao que existe. Ao que importa.</em>
          </h2>
          <div className="intro-copy">
            <p>
              Somos um estúdio independente de arquitetura e interiores. Criamos
              espaços que nascem do diálogo entre pessoas, paisagem e matéria —
              com clareza, cuidado e intenção.
            </p>
            <Link className="under-link" to="/sobre">
              CONHEÇA O ESTÚDIO <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
      <section className="featured section-wrap">
        <Eyebrow number="02 / 04">PROJETOS SELECIONADOS</Eyebrow>
        <div className="featured-heading">
          <h2>
            Feitos para <em>permanecer.</em>
          </h2>
          <Link className="under-link" to="/projetos">
            VER TODOS OS PROJETOS <ArrowUpRight size={13} />
          </Link>
        </div>
        <div className="project-grid home-grid">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard p={p} index={i} key={p.slug} />
          ))}
        </div>
      </section>
      <section className="manifesto">
        <div className="manifesto-image">
          <img
            src={photo("photo-1600607687939-ce8a6c25118c", 1100)}
            alt="Arquitetura contemporânea integrada ao jardim"
            loading="lazy"
          />
        </div>
        <div className="manifesto-copy">
          <span className="eyebrow">UMA PRÁTICA ATENTA</span>
          <h2>
            Menos forma.
            <br />
            <em>Mais presença.</em>
          </h2>
          <p>
            Cada projeto começa com escuta. Entendemos o lugar, os hábitos e as
            possibilidades para criar espaços que façam sentido hoje e continuem
            fazendo amanhã.
          </p>
          <Link className="under-link" to="/processo">
            NOSSO PROCESSO <ArrowUpRight size={13} />
          </Link>
          <span className="manifesto-index">SÃO PAULO · DESDE 2018</span>
        </div>
      </section>
      <section className="services-preview section-wrap">
        <Eyebrow number="03 / 04">O QUE FAZEMOS</Eyebrow>
        <div className="service-list">
          {[
            [
              "01",
              "Arquitetura residencial",
              "Casas pensadas a partir de quem as habita.",
            ],
            [
              "02",
              "Arquitetura comercial",
              "Lugares de encontro com identidade e propósito.",
            ],
            ["03", "Interiores", "Espaços cotidianos desenhados com intenção."],
            ["04", "Consultoria", "Clareza para decidir os próximos passos."],
          ].map(([n, t, d]) => (
            <Link to="/servicos" className="service-row" key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
        <Link to="/servicos" className="under-link service-more">
          CONHEÇA OS SERVIÇOS <ArrowUpRight size={13} />
        </Link>
      </section>
      <section className="home-cta">
        <span className="eyebrow">04 / 04&nbsp;&nbsp; PRÓXIMOS PASSOS</span>
        <h2>
          Um bom projeto
          <br />
          começa com <em>uma conversa.</em>
        </h2>
        <Link className="button button-light" to="/contato#briefing">
          Conte-nos sua ideia <ArrowUpRight size={15} />
        </Link>
        <span className="cta-aside">SEM PRESSA. SEM COMPROMISSO.</span>
      </section>
    </>
  );
}
function ProjectsPage() {
  const [filter, setFilter] = useState("Todos");
  const cats = ["Todos", "Residencial", "Comercial", "Interiores"];
  const list =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);
  return (
    <>
      <SEO
        title="Projetos — ATELIER STUDIO"
        description="Uma seleção de projetos de arquitetura residencial, comercial e interiores do ATELIER STUDIO."
      />
      <section className="page-hero section-wrap">
        <Eyebrow number="01 — 06">PORTFÓLIO</Eyebrow>
        <h1>
          Arquitetura que
          <br />
          <em>parte de dentro.</em>
        </h1>
        <div className="page-hero-foot">
          <p>
            Projetos nascem de conversas, lugares
            <br />e modos de viver únicos.
          </p>
          <span>SÃO PAULO E OUTRAS PAISAGENS</span>
        </div>
      </section>
      <section className="portfolio section-wrap">
        <div
          className="filter-bar"
          role="group"
          aria-label="Filtrar projetos por categoria"
        >
          {cats.map((c) => (
            <button
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={filter === c ? "filter-active" : ""}
              key={c}
            >
              {c}
              <span>
                {c === "Todos"
                  ? projects.length
                  : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
        <div className="project-grid portfolio-grid">
          {list.map((p, i) => (
            <ProjectCard p={p} index={i} key={p.slug} />
          ))}
        </div>
        <p className="portfolio-count">
          {list.length} PROJETOS <span>·</span> 2018 — 2025
        </p>
      </section>
      <CTA />
    </>
  );
}
function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  const idx = projects.findIndex((x) => x.slug === slug);
  if (!p) return <NotFound />;
  const next = projects[(idx + 1) % projects.length];
  return (
    <>
      <SEO
        title={`${p.title} — Projetos ATELIER STUDIO`}
        description={p.description}
      />
      <section className="detail-hero section-wrap">
        <Link className="back-link" to="/projetos">
          <ArrowLeft size={14} /> TODOS OS PROJETOS
        </Link>
        <div className="detail-title">
          <div>
            <span className="eyebrow">
              {p.category.toUpperCase()} <i>·</i> {p.year}
            </span>
            <h1>{p.title}</h1>
            <p>{p.place}</p>
          </div>
          <p className="detail-lede">{p.description}</p>
        </div>
      </section>
      <div className="detail-main-image">
        <img
          src={photo(p.image, 2000)}
          alt={`${p.title}, ${p.category.toLowerCase()} em ${p.place}`}
          fetchPriority="high"
        />
      </div>
      <section className="detail-body section-wrap">
        <div className="detail-meta">
          <div>
            <small>LOCAL</small>
            <span>{p.place}</span>
          </div>
          <div>
            <small>ÁREA</small>
            <span>{p.area}</span>
          </div>
          <div>
            <small>ANO</small>
            <span>{p.year}</span>
          </div>
          <div>
            <small>ESCOPO</small>
            <span>{p.category}</span>
          </div>
        </div>
        <div className="detail-concept">
          <span className="eyebrow">SOBRE O PROJETO</span>
          <div>
            <h2>
              Um lugar para
              <br />
              <em>estar por inteiro.</em>
            </h2>
            <p>{p.detail}</p>
          </div>
        </div>
        <div className="detail-secondary">
          <img
            src={photo(
              [
                "photo-1600607687939-ce8a6c25118c",
                "photo-1600566753086-00f18fb6b3ea",
                "photo-1600210491369-e753d80a41f3",
              ][idx % 3],
              1100,
            )}
            loading="lazy"
            alt={`Detalhe de ${p.title}`}
          />
          <p>
            Matéria, luz e espaço em equilíbrio.
            <span>DETALHE DO PROJETO · {p.year}</span>
          </p>
        </div>
        <Link className="next-project" to={`/projetos/${next.slug}`}>
          <span className="eyebrow">
            PRÓXIMO PROJETO <ArrowRight size={13} />
          </span>
          <h2>
            {next.title} <ArrowUpRight size={23} />
          </h2>
          <span>
            {next.category} · {next.place}
          </span>
        </Link>
      </section>
      <CTA />
    </>
  );
}
function About() {
  const values = [
    [
      "01",
      "Escuta",
      "Antes de desenhar, entendemos. Pessoas, contexto e possibilidades dão início a cada projeto.",
    ],
    [
      "02",
      "Clareza",
      "Decisões bem compartilhadas tornam o processo leve, transparente e consistente.",
    ],
    [
      "03",
      "Permanência",
      "Materiais honestos e soluções atentas ao uso constroem espaços que atravessam o tempo.",
    ],
  ];
  return (
    <>
      <SEO
        title="Sobre o estúdio — ATELIER STUDIO"
        description="Conheça a filosofia, equipe e abordagem de trabalho do ATELIER STUDIO."
      />
      <section className="page-hero section-wrap">
        <Eyebrow number="O ESTÚDIO">QUEM SOMOS</Eyebrow>
        <h1>
          Um estúdio.
          <br />
          <em>Muitas formas de habitar.</em>
        </h1>
        <div className="page-hero-foot">
          <p>
            Prática independente de arquitetura
            <br />e interiores desde 2018.
          </p>
          <span>SÃO PAULO · BRASIL</span>
        </div>
      </section>
      <div className="about-hero-img">
        <img
          src={photo("photo-1600210492486-724fe5c67fb0", 1800)}
          alt="Interior do estúdio com materiais naturais e luz suave"
        />
      </div>
      <section className="about-intro section-wrap">
        <span className="eyebrow">NOSSA ABORDAGEM</span>
        <div>
          <h2>
            Fazemos arquitetura
            <br />
            <em>com intenção e cuidado.</em>
          </h2>
          <p>
            O ATELIER STUDIO é um escritório independente fundado em São Paulo.
            Desenvolvemos projetos de arquitetura e interiores a partir de uma
            prática colaborativa, próxima e atenta às particularidades de cada
            cliente e lugar.
          </p>
          <p>
            Não partimos de fórmulas. Cada projeto é uma investigação sobre o
            que merece permanecer e o que pode se transformar.
          </p>
        </div>
      </section>
      <section className="values section-wrap">
        <Eyebrow number="01 / 03">NO QUE ACREDITAMOS</Eyebrow>
        <div className="value-list">
          {values.map(([n, t, d]) => (
            <article className="value-row" key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="team-section">
        <div className="team-photo">
          <img
            src={photo("photo-1600607687920-4e2a09cf159d", 1100)}
            alt="Texturas e materiais da prática do estúdio"
            loading="lazy"
          />
        </div>
        <div>
          <span className="eyebrow">A EQUIPE</span>
          <h2>
            Pequeno por escolha.
            <br />
            <em>Atento por princípio.</em>
          </h2>
          <p>
            Uma equipe enxuta permite acompanhar cada detalhe de perto.
            Acreditamos que bons projetos são feitos em colaboração — entre
            equipe, cliente, consultores e quem constrói.
          </p>
          <Link className="under-link" to="/contato">
            CONHEÇA NOSSO PROCESSO <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
function Services() {
  const items = [
    [
      "01",
      "Arquitetura residencial",
      "Casas, reformas e ampliações que partem da rotina e das relações com a paisagem.",
      "Do estudo de viabilidade ao acompanhamento da obra.",
    ],
    [
      "02",
      "Arquitetura comercial",
      "Espaços de trabalho, hospitalidade e varejo com identidade e clareza de uso.",
      "Da estratégia espacial à coordenação de projetos complementares.",
    ],
    [
      "03",
      "Interiores",
      "Ambientes que organizam, acolhem e revelam a personalidade de quem vive ali.",
      "Do conceito e materiais aos detalhes de marcenaria e iluminação.",
    ],
    [
      "04",
      "Consultoria",
      "Uma conversa objetiva para orientar decisões antes de iniciar um projeto completo.",
      "Ideal para avaliar imóvel, terreno ou caminhos de reforma.",
    ],
  ];
  return (
    <>
      <SEO
        title="Serviços — ATELIER STUDIO"
        description="Arquitetura residencial e comercial, interiores e consultoria."
      />
      <section className="page-hero section-wrap">
        <Eyebrow number="O QUE FAZEMOS">SERVIÇOS</Eyebrow>
        <h1>
          Do primeiro gesto
          <br />
          <em>ao espaço vivido.</em>
        </h1>
        <div className="page-hero-foot">
          <p>
            Escopos claros e próximos, adaptados
            <br />à escala de cada projeto.
          </p>
          <span>ARQUITETURA · INTERIORES · CONSULTORIA</span>
        </div>
      </section>
      <section className="services-page section-wrap">
        <div className="service-detail-list">
          {items.map(([n, t, d, s]) => (
            <article key={n} className="service-detail">
              <span>{n}</span>
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
              </div>
              <div>
                <p className="service-scope">{s}</p>
                <Link
                  to="/contato#briefing"
                  aria-label={`Conversar sobre ${t}`}
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
function Process() {
  const stages = [
    [
      "01",
      "Conversa",
      "Entendemos o momento, os desejos e as condições do projeto. Um primeiro encontro para escutar e alinhar expectativas.",
      "ENCONTRO INICIAL",
    ],
    [
      "02",
      "Leitura",
      "Visitamos o local, lemos o contexto e organizamos as informações que vão orientar as primeiras decisões.",
      "LEVANTAMENTO",
    ],
    [
      "03",
      "Estudo",
      "Apresentamos caminhos possíveis em plantas, imagens e materiais para construir uma direção compartilhada.",
      "ESTUDO PRELIMINAR",
    ],
    [
      "04",
      "Desenvolvimento",
      "Detalhamos o projeto e coordenamos as disciplinas necessárias para que as ideias encontrem a obra.",
      "PROJETO EXECUTIVO",
    ],
    [
      "05",
      "Acompanhamento",
      "Seguimos próximos durante a execução, esclarecendo dúvidas e cuidando da coerência do projeto.",
      "OBRA",
    ],
  ];
  return (
    <>
      <SEO
        title="Processo — ATELIER STUDIO"
        description="Conheça as etapas de trabalho do primeiro contato à entrega do projeto."
      />
      <section className="page-hero section-wrap">
        <Eyebrow number="COMO TRABALHAMOS">PROCESSO</Eyebrow>
        <h1>
          Um caminho claro.
          <br />
          <em>Feito junto.</em>
        </h1>
        <div className="page-hero-foot">
          <p>
            Cada etapa abre espaço para boas
            <br />
            decisões, sem perder o cuidado.
          </p>
          <span>ESCUTA · TROCA · CONSTRUÇÃO</span>
        </div>
      </section>
      <section className="process-list section-wrap">
        {stages.map(([n, t, d, tag]) => (
          <article className="process-row" key={n}>
            <span className="process-number">{n}</span>
            <div>
              <h2>{t}</h2>
              <p>{d}</p>
            </div>
            <span className="process-tag">{tag}</span>
            <span className="process-line" />
          </article>
        ))}
      </section>
      <section className="process-note">
        <Sparkles size={17} />
        <p>
          O escopo, cronograma e investimento são definidos de forma
          transparente após a conversa inicial.
        </p>
      </section>
      <CTA />
    </>
  );
}
function Contact() {
  return (
    <>
      <SEO
        title="Contato — ATELIER STUDIO"
        description="Conte-nos sobre seu próximo projeto. Briefing inicial para projetos de arquitetura e interiores."
      />
      <section className="contact-page section-wrap">
        <div className="contact-heading">
          <Eyebrow number="VAMOS CONVERSAR">CONTATO</Eyebrow>
          <h1>
            Um espaço novo
            <br />
            começa com <em>uma ideia.</em>
          </h1>
          <p>
            Conte um pouco sobre o que você imagina. Vamos ler com calma e
            responder em até dois dias úteis.
          </p>
          <div className="contact-info">
            <div>
              <small>ESCREVA</small>
              <a href="mailto:oi@atelierstudio.com.br">
                oi@atelierstudio.com.br <ArrowUpRight size={12} />
              </a>
            </div>
            <div>
              <small>ENCONTRE</small>
              <span>
                São Paulo · SP
                <br />
                Atendimento com hora marcada
              </span>
            </div>
            <div>
              <small>FALE DIRETO</small>
              <a
                href="https://wa.me/5511999990000?text=Olá!%20Vim%20pelo%20site%20do%20ATELIER%20STUDIO."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
        <div className="briefing-shell" id="briefing">
          <Briefing />
        </div>
      </section>
    </>
  );
}
function CTA() {
  return (
    <section className="bottom-cta">
      <span className="eyebrow">TEM UM PROJETO EM MENTE?</span>
      <h2>
        Vamos começar
        <br />
        <em>uma conversa.</em>
      </h2>
      <Link className="button button-dark" to="/contato#briefing">
        Iniciar briefing <ArrowUpRight size={15} />
      </Link>
    </section>
  );
}
function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404 · FORA DO MAPA</span>
      <h1>
        Esta página
        <br />
        <em>não existe.</em>
      </h1>
      <Link to="/projetos" className="button button-dark">
        Explorar projetos <ArrowRight size={15} />
      </Link>
    </section>
  );
}
export default function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/processo" element={<Process />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
