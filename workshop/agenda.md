Plan:

# Architektura admin-bro                                  9:00 - 9:30
** DB - adapter => dekorator => JSON
** Routing, controllers and Actions - adaptery.
** Bundling and Building of AdminBro parts

# Setup AdminBro                                          9:30 - 10:00
* Razem: Postawienie AdminaBro
* Razem: Ustalenie struktury katalogów
* Razem: Dodanie encji worklog, plan, projekt, user.

# Adaptery                                                10:15 - 11:30
2. Tworzenie adapterów
** Razem: zrobimy adapter do JIRY: projekty
** Sami: zrobicie adapter do JIRY: userzy

# Customowe Pola                                          11:45 - 13:00
* Razem: zmodyfikujemy wyświetlanie workloga w liście
* Razem: zmodyfikujemy edycję workloga w "Edit"
* Sami: zmodyfikujecie pole image
* Sami: zrobicie pole edycji???

# Przerwa obiadowa                                        13:00 - 13:30

# Customowe Akcje                                         13:30 - 14:00
* Razem: zrobimy akcję do synchronizacji worklogów
* Sami: zrobicie inną akcję ???
* Razem: dodamy zupełnie nową akcję do systemu (nowego routa) ????

# Modyfikacja akcji                                       14:15 - 15:00
* Upload plików???
* zmodyfikujemy akcję edycji tak aby działała ze stepperem, ????
tak aby mozna bylo validować wszystko w krokach

# Postawienie AdminaBro do Developmentu                    15:15 - 16:00

# Design System                                            16:15 - 17:00
** Architektura (styled-components, styled-system)
** Reuzywalne komponenty zarzadzajace stanem

# Role Based Access Control???                             16:00 - 17:00
** Jak działa

Empty list? - nowa funkcja do kustomizacji admina
Redux store - i gdzie co jest.



# Start with the raw mongo + express application with linter.
# Add AdminBro
# File structure

TODO:
Udokumentowanie struktury

# Add resources (worklog, plan, users, projects)
** https://tempo-io.github.io/tempo-api-docs/

# add custom resource - fetch jira projects - Adapters

TODO
* ułatwić dodawanie adapterów
** poprawa definiowania schemy
** usunięcie niepotrzebnych pól z BaseResource
* dokumentacja dodawania adapterów

# Basic changing property

* time in worklogs: list and edit

# Akcje
* edit layout in worklog
