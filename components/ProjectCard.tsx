import React from 'react';
import { Project, ProjectType } from '../types';
import { ExternalLinkIcon, CodeIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      
      {/* Área de Mídia (Imagem ou PowerBI) */}
      <div className="w-full bg-slate-100 aspect-video relative group border-b border-slate-100">
        {project.type === ProjectType.POWERBI ? (
          <div className="w-full h-full relative">
            {/* O PowerBI precisa ser incorporado via Iframe. 
                Utilizamos a classe absoluta para preencher o contêiner de aspecto 16:9. */}
            <iframe
              title={`Relatório PowerBI: ${project.title}`}
              src={project.contentUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
            ></iframe>
            {/* Um overlay sutil para evitar interações acidentais ao rolar a página em telas menores,
                opcional, mas melhora a experiência. Aqui deixaremos direto para interação. */}
          </div>
        ) : (
          <img 
            src={project.contentUrl} 
            alt={`Imagem do projeto ${project.title}`} 
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        )}
        
        {/* Badges Flutuantes indicando o tipo de projeto */}
        <div className="absolute top-3 right-3 pointer-events-none">
          <span className={`px-2 py-1 text-xs font-semibold rounded shadow-sm ${
            project.type === ProjectType.POWERBI 
              ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            {project.type === ProjectType.POWERBI ? 'PowerBI Dashboard' : 'Projeto Visual'}
          </span>
        </div>
      </div>

      {/* Detalhes do Projeto */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links de Ação */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-800 transition-colors"
            >
              <ExternalLinkIcon />
              Acessar Projeto
            </a>
          )}
          {project.repoLink && (
            <a 
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <CodeIcon />
              Código Fonte
            </a>
          )}
          
          {/* Se não houver links, exibir uma mensagem sutil */}
          {!project.liveLink && !project.repoLink && project.type === ProjectType.POWERBI && (
            <span className="text-sm text-slate-400 italic">
              Interaja com o painel acima
            </span>
          )}
        </div>
      </div>
    </div>
  );
};