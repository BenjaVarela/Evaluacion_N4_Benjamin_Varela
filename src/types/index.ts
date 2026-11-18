import type { ChangeEvent, FormEvent, KeyboardEvent, ReactNode } from 'react';

export interface ProjectItem {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  urlRepo: string;
}
export interface Profile {
  nombre: string;
  presentacion: string;
}
export interface NavItem {
  ruta: string;
  texto: string;
}
export type Theme = 'claro' | 'oscuro';
export interface ThemeContextValue {
  tema: Theme;
  cambiarTema: () => void;
}
export interface ChildrenProps { children: ReactNode }
export interface ProjectCardProps { proyecto: ProjectItem; principal?: boolean }
export interface SectionProps { principal?: boolean }
export interface FormValues {
  nombre: string;
  correo: string;
  mensaje: string;
}
export type FormErrors = Partial<Record<keyof FormValues, string>>;
export type FieldEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export type SubmitEvent = FormEvent<HTMLFormElement>;
export type MenuKeyEvent = KeyboardEvent<HTMLElement>;

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}
export interface ApiState {
  data: GitHubRepo[] | null;
  loading: boolean;
  error: string | null;
}
export interface RepoCache {
  datos: GitHubRepo[];
  fecha: number;
}
export interface StatusMessageProps extends ChildrenProps { error?: boolean }
export interface RepositoryCardProps { repositorio: GitHubRepo }
