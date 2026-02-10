export enum ProjectType {
  IMAGE = 'IMAGE',
  POWERBI = 'POWERBI'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  /**
   * Se type for IMAGE, contentUrl é a URL da imagem.
   * Se type for POWERBI, contentUrl é o link 'src' do iframe (Publicar na Web).
   */
  contentUrl: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
}