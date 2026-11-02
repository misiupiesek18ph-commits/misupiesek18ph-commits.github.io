// ============================================================
// BAZA ZWROTÓW — DOKŁADNIE Z PODRĘCZNIKA
// ============================================================

const PHRASES = [
  // BANK
  { id: 1,  cat: "bank",     de: "Wo kann ich Geld einzahlen?", pl: "Gdzie mogę wpłacić pieniądze?" },
  { id: 2,  cat: "bank",     de: "Wo kann ich Geld abheben?", pl: "Gdzie mogę podjąć pieniądze?" },
  { id: 3,  cat: "bank",     de: "Wie eröffnet man ein Konto?", pl: "Jak otwiera się konto?" },
  { id: 4,  cat: "bank",     de: "Kann ich einen Kredit aufnehmen?", pl: "Czy mogę wziąć kredyt?" },
  { id: 5,  cat: "bank",     de: "Wie hoch sind die Zinsen?", pl: "Jak wysokie są odsetki?" },
  { id: 6,  cat: "bank",     de: "Wie füllt man das Formular aus?", pl: "Jak wypełnia się formularz?" },
  { id: 7,  cat: "bank",     de: "Wo soll ich unterschreiben?", pl: "Gdzie mam podpisać?" },
  { id: 8,  cat: "bank",     de: "Wo kann ich die Rechnung bezahlen?", pl: "Gdzie mogę zapłacić rachunek?" },
  { id: 9,  cat: "bank",     de: "Die Kontoführung ist kostenlos.", pl: "Prowadzenie konta jest bezpłatne." },
  { id: 10, cat: "bank",     de: "Ihr Gehalt wird auf Ihr Konto überwiesen.", pl: "Pana/Pani wynagrodzenie będzie przelewane na konto." },
  { id: 11, cat: "bank",     de: "Die Nutzung von Geldautomaten ist gebührenfrei.", pl: "Korzystanie z bankomatów jest bezpłatne." },
  { id: 12, cat: "bank",     de: "Die Bankgeschäfte können Sie von zu Hause aus erledigen.", pl: "Transakcje bankowe może Pan/Pani wykonywać z domu." },

  // POCZTA
  { id: 13, cat: "poczta",   de: "Wann kann ich das Einschreiben abholen?", pl: "Kiedy mogę odebrać list polecony?" },
  { id: 14, cat: "poczta",   de: "Welche Briefmarke muss ich aufkleben?", pl: "Jaki znaczek mam nakleić?" },
  { id: 15, cat: "poczta",   de: "An welchem Schalter kann ich ein Paket aufgeben?", pl: "W którym okienku mogę nadać paczkę?" },
  { id: 16, cat: "poczta",   de: "Das Paket können Sie erst ab 16 Uhr abholen.", pl: "Paczkę może Pan/Pani odebrać dopiero od godziny 16." },
  { id: 17, cat: "poczta",   de: "Sie können Ihre Post übers Internet schicken.", pl: "Może Pan/Pani wysłać swoją pocztę przez internet." },
  { id: 18, cat: "poczta",   de: "Werfen Sie den Brief in den Briefkasten ein.", pl: "Proszę wrzucić list do skrzynki pocztowej." },

  // BANKOMAT
  { id: 19, cat: "bankomat", de: "Ist die Nutzung des Bankautomaten kostenlos?", pl: "Czy korzystanie z bankomatu jest bezpłatne?" },
  { id: 20, cat: "bankomat", de: "Welche Karten nimmt der Bankautomat an?", pl: "Jakie karty przyjmuje ten bankomat?" },
  { id: 21, cat: "bankomat", de: "Soll ich jetzt die PIN-Nummer eingeben?", pl: "Czy mam wprowadzić teraz numer PIN?" },
  { id: 22, cat: "bankomat", de: "Darf ich schon meine Karte entnehmen?", pl: "Czy mogę już wyjąć swoją kartę?" },
  { id: 23, cat: "bankomat", de: "Stecken Sie Ihre Karte in den Kartenschlitz.", pl: "Proszę włożyć kartę do otworu na kartę." },
  { id: 24, cat: "bankomat", de: "Drücken Sie den Knopf.", pl: "Proszę nacisnąć przycisk." },
  { id: 25, cat: "bankomat", de: "Geben Sie Ihre PIN-Nummer ein.", pl: "Proszę wprowadzić numer PIN." },
  { id: 26, cat: "bankomat", de: "Wählen Sie den Betrag aus.", pl: "Proszę wybrać kwotę." },
  { id: 27, cat: "bankomat", de: "Bestätigen Sie per Knopfdruck.", pl: "Proszę potwierdzić, naciskając przycisk." },
  { id: 28, cat: "bankomat", de: "Entnehmen Sie Ihre Karte.", pl: "Proszę wyjąć swoją kartę." }
];