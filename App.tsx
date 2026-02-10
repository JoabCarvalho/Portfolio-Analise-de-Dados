import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/Icons';
import { ProjectCard } from './components/ProjectCard';
import { USER_PROFILE, PROJECTS } from './data/portfolioData';

export default function App() {
  
  // Função para rolar suavemente até a seção desejada compensando o cabeçalho fixo
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 64; // Altura do cabeçalho (h-16 = 4rem = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Tenta atualizar a URL com o hash sem causar pulos bruscos
      // Usamos try/catch pois ambientes sandboxed (como o atual) podem bloquear o acesso ao History API
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (error) {
        console.warn("Acesso ao history bloqueado neste ambiente de visualização. Funcionará normalmente em produção.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navegação Fixa */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-brand-600 tracking-tight cursor-pointer" onClick={(e) => handleNavClick(e as any, 'inicio')}>
            {USER_PROFILE.name.split(' ')[0]}<span className="text-slate-900">.io</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="hover:text-brand-600 transition-colors">Início</a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="hover:text-brand-600 transition-colors">Sobre Mim</a>
            <a href="#projetos" onClick={(e) => handleNavClick(e, 'projetos')} className="hover:text-brand-600 transition-colors">Portfólio</a>
            <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="hover:text-brand-600 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Seção Hero (Início) */}
        <section id="inicio" className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                Olá, eu sou <br className="hidden md:block" />
                <span className="text-brand-600">{USER_PROFILE.name}</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0">
                {USER_PROFILE.role}. Procuro me especializar na arte de transformar dados complexos em histórias visuais claras para apoiar decisões estratégicas.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projetos" onClick={(e) => handleNavClick(e as any, 'projetos')} className="px-6 py-3 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors shadow-sm">
                Ver Meus Projetos
              </a>
              <a href="#contato" onClick={(e) => handleNavClick(e as any, 'contato')} className="px-6 py-3 rounded-lg bg-white text-slate-700 font-medium border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                Entrar em Contato
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 pt-4 text-slate-500">
              <a href={USER_PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={USER_PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={`mailto:${USER_PROFILE.email}`} className="hover:text-brand-600 transition-colors" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>
          
          {/* Imagem do lado direito puxada dos dados do usuário */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
             <div className="aspect-square rounded-full bg-gradient-to-tr from-brand-100 to-brand-50 p-4 md:p-8 shadow-inner overflow-hidden flex items-center justify-center">
                <img 
                  src={USER_PROFILE.avatarUrl} 
                  alt={`Foto de perfil de ${USER_PROFILE.name}`} 
                  className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                />
             </div>
          </div>
        </section>

        {/* Seção Sobre */}
        <section id="sobre" className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Sobre Mim</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {USER_PROFILE.bio}
            </p>
          </div>
        </section>

        {/* Seção Projetos / Portfólio */}
        <section id="projetos" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Portfólio em Destaque</h2>
            <p className="text-slate-600 max-w-2xl">
              Explore abaixo alguns dos meus principais trabalhos. Navegue pelos dashboards interativos do PowerBI embutidos diretamente aqui, ou visualize capturas de tela e acesse repositórios de projetos em código.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        
        {/* Seção Call to Action / Contato */}
        <section id="contato" className="bg-brand-900 py-16 sm:py-24 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl font-bold text-white">Pronto para conversarmos?</h2>
            <p className="text-brand-100 text-lg max-w-2xl mx-auto">
              Seja para discutir uma oportunidade de trabalho, um projeto freelance ou apenas para trocar ideias sobre dados e tecnologia, sinta-se à vontade para me contatar.
            </p>
            <div className="pt-4">
              <a 
                href={`mailto:${USER_PROFILE.email}`} 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-900 font-bold hover:bg-brand-50 transition-colors shadow-lg"
              >
                <MailIcon className="w-5 h-5" />
                Me mande um email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
          <div className="flex gap-6 text-slate-400">
            <a href={USER_PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
            <a href={USER_PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {USER_PROFILE.name}. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Desenvolvido com React & Tailwind CSS.
          </p>
        </div>
      </footer>

    </div>
  );
}
