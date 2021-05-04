# Dashboard
- `/`
  - statystyki dzisiejszych zamównień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj


# Logowanie
- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostepności stolików
- `/tables`
  - wybór daty i godziny
  - tabelka z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google
    - po kliknieciu rezerwacji bądź eventu przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyższej, bez początkowych inforamcji
- `/tables/events/:id`
  - analogicznie do powyższej, dla eventów
- `/tables/events/new`
  - analogicznie do powyższej, dla eventów, bez początkowych inforamcji

# Widok kelnera
- `/orders`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/orders/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/orders/order/:id`
  - analogicznie do powyższej

# Widok kuchni
- `/kitchen`
  - wyświetla listę zamównień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dotyczące zamówinonych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane


