---
title: "Power budget: ile prądu potrzebuje GRZYBOL9000?"
date: 2026-11-22
category: "Zasilanie"
area: hardware
version: "Rev A"
summary: "Zestawiłem pobór prądu podzespołów i przyjrzałem się różnym trybom pracy urządzenia."
order: 2
---

GRZYBOL9000 ma działać z akumulatora 18650, dlatego samo dobranie przetwornicy nie wystarczy. Muszę wiedzieć, **ile energii potrzebuje cały układ**, a nie tylko jego mikrokontroler.

Przygotowałem **power budget**, w którym uwzględniłem między innymi:

- mikrokontroler STM32 i odbiornik GNSS L76;
- wyświetlacz, szczególnie podświetlenie;
- układy komunikacyjne i pozostałe peryferia;
- pobór energii w czasie normalnej pracy oraz w trybach ograniczonego zużycia.

Oddzielam typowy pobór prądu od bardziej wymagających scenariuszy. Dzięki temu łatwiej ocenić obciążenie linii 3,3 V i sensownie dobrać elementy zasilania.

**Status:** wstępne zestawienie poboru prądu jest gotowe. Rzeczywisty czas działania na akumulatorze sprawdzę dopiero podczas testów prototypu.
