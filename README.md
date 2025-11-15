# WorkSphere – Virtual Workspace

WorkSphere est une application web interactive permettant de gérer visuellement les employés d’un espace de travail sur un plan d’étage dynamique.  
L’objectif est d’améliorer l’organisation interne en respectant les règles métier liées aux rôles et aux zones autorisées.

---

## 🚀 Fonctionnalités principales

### 👥 Gestion des employés
- Ajout d’un employé via une modale  
  (Nom, Rôle, Email, Téléphone, Photo, Expériences professionnelles).
- Prévisualisation de la photo.
- Liste des employés non assignés (**Unassigned Staff**).
- Suppression d’un employé via un bouton **X** (retour à Unassigned).
- Édition des employés (optionnel).

### 🗺️ Plan d’étage interactif
Zones disponibles :
1. Salle de conférence  
2. Réception  
3. Salle des serveurs  
4. Salle de sécurité  
5. Salle du personnel  
6. Salle d’archives  

Chaque zone possède un bouton **+** pour sélectionner les employés autorisés.

### 🔐 Règles d’accès
- Réception → Réceptionnistes uniquement  
- Salle des serveurs → Techniciens IT  
- Salle de sécurité → Agents de sécurité  
- Managers → accès total  
- Nettoyage → partout sauf Archives  
- Autres rôles → accès libre sauf zones restreintes  

### 🎨 Interface & Design
- Zones vides obligatoires affichées en rouge pâle.  
- Design moderne (Flexbox, Grid, animations).  
- Limitation du nombre d’employés par zone.  
- Responsive mobile / tablette / desktop.

---

## 🛠️ Technologies utilisées
- HTML5  
- CSS3  
- JavaScript  
- LocalStorage  
- Git / GitHub  
- GitHub Pages ou Vercel  

---

## 📱 Responsive Design
Compatible avec :
- **>1280px** : Grand écran  
- **1024–1279px** : Laptop  
- **768–1023px** : Tablette  
- **<767px** : Mobile  
- Modes paysage supportés  

---

## 📦 Installation

Cloner le projet :

```bash
git clone https://github.com/fakhrddinelargou/WorkSphere---Virtual-Workspace.git