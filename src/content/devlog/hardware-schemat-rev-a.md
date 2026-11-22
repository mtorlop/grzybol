---
title: "Schemat Rev A: ostatnia prosta"
date: 2026-11-22
category: "Schemat"
area: hardware
version: "Rev A"
summary: "Najważniejsze bloki elektroniczne są już rozrysowane"
order: 3
---

Praca nad pierwszą rewizją elektroniki przeszła od wyboru części do połączenia ich w jeden układ. **Schemat GRZYBOL9000 Rev A jest już praktycznie ukończony.**

W projekcie mam rozplanowane główne bloki:

- zasilanie z ogniwa Li-ion, ładowanie oraz przetwarzanie napięcia do 3,3 V;
- mikrokontroler STM32 z sygnałami potrzebnymi do uruchamiania i programowania przez SWD;
- odbiornik GNSS i komunikację z mikrokontrolerem;
- połączenia wyświetlacza oraz pozostałych peryferiów.

Po drodze pojawiło się sporo drobnych decyzji: wartości elementów pomocniczych, sygnały sterujące, podłączenie pinów i miejsca na testpointy. To one często decydują, czy pierwszą płytkę da się wygodnie uruchomić.

**Status:** schemat jest bliski ukończenia, ale nie nazywam go jeszcze ostatecznie zatwierdzonym. Przed zamówieniem PCB czeka go przegląd i kontrola zgodności z dokumentacją układów.
