import { useRef, useState } from 'react';
import type { FieldEvent, FormErrors, FormValues, SectionProps, SubmitEvent } from '../types';

function validarFormulario(datos: FormValues): FormErrors {
  const errores: FormErrors = {};
  if (datos.nombre.trim().length < 2) errores.nombre = 'Escribe tu nombre (al menos 2 caracteres).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo.trim())) errores.correo = 'Escribe un correo válido, por ejemplo nombre@correo.cl.';
  if (datos.mensaje.trim().length < 10) errores.mensaje = 'Escribe un mensaje de al menos 10 caracteres.';
  return errores;
}

export function ContactPage({ principal = true }: SectionProps) {
  const [datos, setDatos] = useState<FormValues>({ nombre: '', correo: '', mensaje: '' });
  const [errores, setErrores] = useState<FormErrors>({});
  const [confirmacion, setConfirmacion] = useState<string>('');
  const formulario = useRef<HTMLFormElement>(null);
  const Titulo = principal ? 'h1' : 'h2';

  function cambiarCampo(evento: FieldEvent): void {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
    setErrores({ ...errores, [name]: undefined });
    setConfirmacion('');
  }

  function enviar(evento: SubmitEvent): void {
    evento.preventDefault();
    const nuevosErrores: FormErrors = validarFormulario(datos);
    setErrores(nuevosErrores);
    setConfirmacion('');
    if (Object.keys(nuevosErrores).length > 0) {
      const primerCampo = nuevosErrores.nombre ? 'nombre' : nuevosErrores.correo ? 'correo' : 'mensaje';
      const control = formulario.current?.elements.namedItem(primerCampo);
      if (control instanceof HTMLElement) control.focus();
      return;
    }
    setConfirmacion('¡Formulario validado correctamente! Esta demostración no envía correos ni guarda tus datos.');
  }

  return (
    <section className="contact" aria-labelledby="contacto-titulo">
      <Titulo className="contact__title" id="contacto-titulo">Contáctame</Titulo>
      <form ref={formulario} className="contact__form" onSubmit={enviar} noValidate
        aria-label="Formulario de contacto" aria-describedby="contacto-aviso">
        <p className="contact__notice" id="contacto-aviso">Formulario de demostración. Todos los campos son obligatorios; no se envían correos.</p>
        <label htmlFor="nombre">Tu Nombre</label>
        <input id="nombre" name="nombre" autoComplete="name" value={datos.nombre} onChange={cambiarCampo}
          required maxLength={80} aria-invalid={Boolean(errores.nombre)} aria-describedby={errores.nombre ? 'error-nombre' : undefined} />
        {errores.nombre && <p id="error-nombre" className="contact__error">{errores.nombre}</p>}
        <label htmlFor="correo">Tu Correo Electrónico</label>
        <input id="correo" name="correo" type="email" autoComplete="email" value={datos.correo} onChange={cambiarCampo}
          required maxLength={150} aria-invalid={Boolean(errores.correo)} aria-describedby={errores.correo ? 'error-correo' : undefined} />
        {errores.correo && <p id="error-correo" className="contact__error">{errores.correo}</p>}
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={5} placeholder="¿En qué te puedo ayudar?" value={datos.mensaje}
          onChange={cambiarCampo} required maxLength={2000} aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined} />
        {errores.mensaje && <p id="error-mensaje" className="contact__error">{errores.mensaje}</p>}
        <p className="contact__error" role="alert">{Object.keys(errores).some(campo => errores[campo as keyof FormErrors]) ? 'Revisa los campos indicados.' : ''}</p>
        <button className="button button--submit" type="submit">Enviar Mensaje</button>
        <p className="contact__confirmation" role="status" aria-live="polite">{confirmacion}</p>
      </form>
    </section>
  );
}
