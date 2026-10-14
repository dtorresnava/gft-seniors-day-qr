# QR de bienvenida · Día Senior

Web estática y móvil para una demostración educativa sobre seguridad con códigos QR.

## Recorrido

1. La portada separa claramente la agenda y la prueba educativa del login.
2. `/calendario/` muestra únicamente el programa público del Día Senior.
3. `/prueba-qr-login/` muestra una solicitud de acceso simulada, sin campos editables.
4. Cualquier decisión conduce a la explicación y a la regla «Para, mira, piensa».
5. `/acceso-bbva-seguro/` es una simulación bancaria segura, accesible solo mediante el QR del taller.

La web no recopila, almacena ni transmite datos.

## Probar en local

Desde esta carpeta:

```bash
python3 -m http.server 4173
```

Después, abre:

- `http://localhost:4173/`
- `http://localhost:4173/calendario/`
- `http://localhost:4173/prueba-qr-login/`
- `http://localhost:4173/acceso-bbva-seguro/`

## Publicar en ChatGPT Sites

Abre el proyecto en Codex o ChatGPT Work y pide:

> Convierte este proyecto en una website de ChatGPT Sites. Mantén la experiencia estática, sin almacenamiento ni inicio de sesión. Guarda primero una versión privada para que pueda revisarla antes de publicarla.

Cuando esté publicada, usa la URL resultante como destino del QR de entrada.
