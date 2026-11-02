# Deutsch Lernstudio

Elegancka, responsywna aplikacja do nauki zwrotów z polskiego na niemiecki.

## Uruchomienie w Visual Studio Code

1. Rozpakuj folder `Deutsch-Lernstudio`.
2. Otwórz folder w Visual Studio Code.
3. Otwórz plik `index.html`.
4. Kliknij prawym przyciskiem i wybierz **Open with Live Server** (jeśli masz rozszerzenie Live Server).
   - Alternatywnie otwórz `index.html` dwuklikiem w przeglądarce. Aplikacja działa bez serwera.

## Pliki

- `index.html` — struktura aplikacji
- `style.css` — wygląd, responsywność i motyw
- `data.js` — 28 par zdań PL → DE
- `app.js` — logika fiszek, treningu, egzaminu i postępów

## Funkcje

- trening pisania odpowiedzi po niemiecku;
- porównywanie odpowiedzi z dokładnym zdaniem niemieckim z zestawu;
- fiszki;
- egzamin końcowy;
- dział „Powtórka błędów”;
- filtrowanie według trzech działów;
- kolejność z książki lub losowa;
- statystyki i postęp zapisywane lokalnie w przeglądarce (`localStorage`).

## Ważne informacje o materiale

Niemieckie zdania zostały przepisane zgodnie z tekstem podanym w rozmowie. W kilku miejscach polski tekst z OCR był ucięty lub zniekształcony, dlatego uzupełniono go sensownie:
- „Pana/Pani wynagrodzenie będzie przelewane na konto.”
- „Transakcje bankowe może Pan/Pani wykonywać z domu.”
- „Paczkę może Pan/Pani odebrać dopiero od godziny 16.”
- instrukcje bankomatu: „Proszę wybrać kwotę”, „Proszę potwierdzić, naciskając przycisk”, „Proszę wyjąć swoją kartę”.

Jeśli Twoja książka ma w tych miejscach inne polskie sformułowania, edytuj tylko pole `pl` przy danym wpisie w `data.js`.

## Sprawdzanie odpowiedzi

Aplikacja toleruje wielkość liter, nadmiarowe spacje i końcowy znak interpunkcyjny. Wymaga natomiast zgodności słownictwa i szyku z wersją niemiecką w zestawie. To celowe, ponieważ ćwiczysz dokładne brzmienie z książki.

„Opanowane” zdanie wymaga dwóch poprawnych odpowiedzi. Pomyłki można powtarzać w osobnym dziale.
