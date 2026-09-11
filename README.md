# AA Fare Code Decoder

A mobile-first, dependency-free American Airlines booking-class and fare-basis decoder.

## What it decodes

- AA published purchased-fare booking classes (F/J, A/C/D/I/R, W/P, Y/H/K/M/L/V/G/S/N/Q/O, B)
- AA Basic Economy markers, including booking class B and the published 7th-character B fare-basis identifier
- AA's documented 2023 8th-character channel/viewership construct for U.S. Domestic and Mexico/Caribbean/Latin America fare filings
- Common fare-basis conventions such as NR, OW, RT, CH, IN, and 3/7/14/21-day advance-purchase clues
- Selected historical AA fare-basis patterns, explicitly labeled as heuristic

Every interpretation is confidence-labeled. The site intentionally does not claim that a fare basis alone proves refundability, change rules, baggage, upgrades, minimum/maximum stay, or other contract terms; the filed fare rules control.

## Run

Open `index.html` directly, or serve this directory from any static web host.

No build step or external dependencies are required.
