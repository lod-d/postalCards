# postalCards 🏝️

**Créateur de cartes postales décorées**  
Ce petit projet permet d’ajouter des stickers décoratifs à une carte virtuelle en cliquant dessus, avec placement aléatoire et possibilité de les retirer.

---

## Fonctionnalités

- Affichage d’un carrousel de stickers à ajouter  
- Ajout d’un sticker à un emplacement aléatoire sur la carte  
- Comptage dynamique du nombre d’éléments présents  
- Suppression d’un sticker cliqué  
- Bouton "Tout Effacer" pour remettre à zéro la carte

---

## Technologie utilisée

- **HTML / CSS / JavaScript**  
- Vanilla JS sans framework (DOM, événements, création dynamique d’éléments)  
- Image de fond + stickers sous forme de `<img>`

---

## Installation et exécution

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/lod-d/postalCards.git

	2.	Se rendre dans le dossier du projet :

cd postalCards


	3.	Ouvrir index.html dans un navigateur compatible ES module pour exécuter l’application (par exemple depuis un serveur local ou drag & drop).
	4.	Aucune dépendance externe nécessaire.

Si besoin, tu peux utiliser un serveur local simple (ex. avec npx serve ou python -m http.server).

⸻

Utilisation
	•	Clique sur un des stickers affichés à gauche pour l’ajouter à la carte postale.
	•	Le sticker apparaîtra à une position aléatoire et sa taille varie.
	•	Clique sur un sticker déjà placé pour le supprimer.
	•	Appuie sur “Tout Effacer” pour remettre la carte à zéro et recommencer.

⸻

Structure du projet

postalCards/
├── index.html
└── src/
    ├── main.js
    ├── style.css
    └── images/
        ├── barbuc.png
        ├── canard-autop.png
        ├── glace.png
        ├── lunette.png
        ├── palmier.png
        ├── parasol.png
        ├── soleil.png
        └── vachette.png

	•	main.js : logique JavaScript (ajout, suppression, comptage, position aléatoire)
	•	style.css : styles pour la mise en page
	•	images/ : les stickers et l’image de fond

⸻

Contribution

Contributions bienvenues ! Pour proposer des ajouts ou améliorations :
	1.	Fork le dépôt
	2.	Crée une branche de fonctionnalité (feature/nom-fonctionnalité)
	3.	Commit tes changements
	4.	Ouvre une Pull Request

⸻

❤️ Merci d’avoir utilisé postalCards, et amuse-toi bien à décorer tes cartes postales virtuelles !

⸻