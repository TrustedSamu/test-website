# Feudenheim Energie Website

Eine moderne Website für den Energieversorger Feudenheim Energie. Die Website zeigt Tarife, Neuigkeiten und Kontaktinformationen an.

## Features

- Responsive Design
- Dynamische Tarif-Anzeige
- Firebase Integration
- Kontaktformular
- Neuigkeiten-Sektion

## Technologien

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Firebase (Firestore)
- Font Awesome Icons

## Setup

1. Repository klonen:
```bash
git clone https://github.com/[your-username]/feudenheim-energie.git
cd feudenheim-energie
```

2. Einen lokalen Webserver starten (z.B. mit Python):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

3. Die Website im Browser öffnen:
```
http://localhost:8000
```

## Firebase Konfiguration

Die Website verwendet Firebase für die Datenspeicherung. Um die Firebase-Funktionalität zu nutzen:

1. Erstellen Sie ein Firebase-Projekt unter [Firebase Console](https://console.firebase.google.com/)
2. Aktualisieren Sie die Firebase-Konfiguration in der `index.html`
3. Aktivieren Sie Firestore in Ihrem Firebase-Projekt

## Projektstruktur

```
feudenheim-energie/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── tariffs.js
├── index.html
├── .gitignore
└── README.md
```

## Beitragen

1. Fork das Projekt
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details. 