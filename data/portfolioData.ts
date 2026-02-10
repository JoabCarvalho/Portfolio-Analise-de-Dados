import { Project, ProjectType, UserProfile } from '../types';

export const USER_PROFILE: UserProfile = {
  name: "Joab Carvalho",
  role: "Buscando uma oportunidade para me tornar Analista de Dados",
  bio: "Formando em Sistema de Informação em 2016 e Pós-Graduado em Análise de Dados em 2026. Sou um profissional que vem se apaixonando por transformar dados brutos em insights acionáveis. Tenho experiência em consultas e manupilações em SQL através do banco de dados MySQL e já há algum tempo venho abrindo os olhos para a área de Analisar Dados, onde venho procurando obter conhecimento através de cursos e materiais da internet. Este portfólio demonstra alguns dos meus trabalhos.",
  email: "carvalho.morais.sales@gmail.com",
  github: "https://github.com/JoabCarvalho",
  linkedin: "https://linkedin.com/in/joabcarvalho",
  avatarUrl: "https://github.com/JoabCarvalho.png"
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Dashboard de Vendas Globais",
    description: "Um painel interativo criado no PowerBI para analisar tendências de vendas, lucratividade por região e desempenho de produtos em tempo real.",
    type: ProjectType.POWERBI,
    // Substitua este link pelo link gerado no PowerBI em: Arquivo -> Inserir Relatório -> Publicar na Web (Público)
    contentUrl: "https://app.powerbi.com/view?r=eyJrIjoiOGVmM2RlN2ItZmRlYi00NjliLWI5ZjItZGU0NDAwNDg4NGYyIiwidCI6ImI1N2QxYWY0LWVmZDEtNGI2OC1hNTA5LTNmMWYzNTJmZTgzYSIsImMiOjh9",
    tags: ["PowerBI", "DAX", "Data Visualization", "Vendas"],
    liveLink: "#"
  },
  {
    id: "proj-2",
    title: "Análise de Churn de Clientes",
    description: "Projeto focado em identificar os principais fatores que levam à evasão de clientes. O relatório final inclui visualizações claras e recomendações de retenção.",
    type: ProjectType.IMAGE,
    contentUrl: "https://picsum.photos/800/450?random=1",
    tags: ["Python", "Pandas", "Matplotlib", "Análise Preditiva"],
    repoLink: "https://github.com"
  },
  {
    id: "proj-3",
    title: "Relatório de RH & Diversidade",
    description: "Painel focado em métricas de recursos humanos, destacando a distribuição demográfica e indicadores de diversidade e inclusão corporativa.",
    type: ProjectType.POWERBI,
    // Link de exemplo público
    contentUrl: "https://app.powerbi.com/view?r=eyJrIjoiNGE2MTAyZjUtOTNjYS00MTZiLTkyMTItMWViZGVkMzMyZTJmIiwidCI6ImI1N2QxYWY0LWVmZDEtNGI2OC1hNTA5LTNmMWYzNTJmZTgzYSIsImMiOjh9",
    tags: ["PowerBI", "HR Analytics", "ETL"],
  },
  {
    id: "proj-4",
    title: "Web App de Gestão Financeira",
    description: "Uma aplicação web simples para controle de despesas pessoais, construída com React e integrada com gráficos dinâmicos para visualização de gastos.",
    type: ProjectType.IMAGE,
    contentUrl: "https://picsum.photos/800/450?random=2",
    tags: ["React", "TailwindCSS", "Frontend"],
    liveLink: "https://exemplo.com",
    repoLink: "https://github.com"
  }
];