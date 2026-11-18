import type { StatusMessageProps } from '../../types';

export function StatusMessage({ error = false, children }: StatusMessageProps) {
  return <p className="repositories__status" role={error ? 'alert' : 'status'} aria-live={error ? 'assertive' : 'polite'}>{children}</p>;
}
