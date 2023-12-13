# Laboratorul 4: Managementul stării în aplicațiile web

## 1. Instrucțiuni privind instalarea și pornirea proiectului

### Dependințe
Asigurați-vă că aveți Node.js și npm instalate pe sistemul dumneavoastră.

### Pasul 1: Instalare dependințe
```bash
npm install
```
### Pasul 2: Pornirea aplicației
```bash
npm start
```

Aplicația va fi disponibilă la adresa http://localhost:3000.

## 2. Link-ul Proiectului 

Git: https://github.com/7Lera/ToDos.git

## 3. Descrierea proiectului

### Proiectul constă în introducerea studenților în gestionarea stării în framework-urile frontend, concentrându-se pe utilizarea redux-toolkit. Cerințele sunt:

Integrarea Redux Toolkit:
Instalarea pachetelor necesare: @reduxjs/toolkit și react-redux.
Crearea unui store de bază cu ajutorul funcției configureStore.

Crearea unui Slice pentru Managementul Stării:
Utilizarea funcționalității Redux Toolkit, în special createSlice, pentru a crea un slice care să gestioneze starea task-urilor în aplicație.

Acțiuni Asincrone în Redux Toolkit:
Utilizarea funcționalității Redux Toolkit, în special createAsyncThunk, pentru a crea un thunk asincron pentru obținerea datelor de la server.
Înlocuirea logicii locale de obținere a datelor în componente cu utilizarea thunk-ului.

## 4. Întrebări de control

### 1.  Ce este `Redux Toolkit` și în ce scop este utilizat?
Este un set de unelte pentru simplificarea gestionării stării în aplicațiile React care utilizează Redux.
    
Scopul principal al Redux Toolkit este:

Simplificarea codului: Redux Toolkit vine cu funcționalități precum createSlice pentru a defini reduceri mai ușor și configureStore pentru a crea un magazin Redux cu configurări predefinite, reducând astfel boilerplate-ul.

Ușurarea administrării acțiunilor: Oferă un set de unelte pentru a crea acțiuni și reduceri mai eficient, precum și createAsyncThunk pentru gestionarea mai ușoară a acțiunilor asincrone.

### 2. Ce înseamnă gestionarea stării în dezvoltarea frontend?
Actualizarea datelor critice într-o aplicație web pentru a menține coerența și reactivitatea.

### 3. În ce situații este potrivit să utilizăm manageri de stare, cum ar fi `Redux Toolkit`?
Aplicații complexe cu o ierarhie adâncă de componente.
Aplicații cu stări globale.
Gestionarea acțiunilor asincrone.
Proiecte cu echipe mari de dezvoltatori pentru structură și convenții comune.

