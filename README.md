# QR de bienvenida · Día Senior

Web estática y móvil para una demostración educativa sobre seguridad con códigos QR.

## Recorrido

1. Una bienvenida plausible invita a abrir la guía del evento.
2. La página muestra una solicitud de acceso simulada, sin campos editables.
3. Cualquier decisión conduce a la explicación y a la regla «Para, mira, piensa».

La web no recopila, almacena ni transmite datos.

## Probar en local

Desde esta carpeta:

```bash
python3 -m http.server 4173
```

Después, abre `http://localhost:4173`.

## Publicar en ChatGPT Sites

Abre el proyecto en Codex o ChatGPT Work y pide:

> Convierte este proyecto en una website de ChatGPT Sites. Mantén la experiencia estática, sin almacenamiento ni inicio de sesión. Guarda primero una versión privada para que pueda revisarla antes de publicarla.

Cuando esté publicada, usa la URL resultante como destino del QR de entrada.
