export type ComponentData = {
  slug: string;
  name: string;
  type: string;
  description: string;
  image: string;
  partNumber: string;
  producer: string;
  explanation: string;
  useInGrzybol: string;
  reason: string;
  specs: { label: string; value: string }[];
  datasheet: string;
};

export const components: ComponentData[] = [
  {
    slug: 'stm32',
    name: 'STM32L431CBT6',
    type: 'MIKROKONTROLER',
    description: 'Główny układ sterujący urządzeniem.',
    image: 'grzybol-stm32.png',
    partNumber: 'STM32L431CBT6',
    producer: 'STMicroelectronics',

    explanation:
      '32-bitowy mikrokontroler z rodziny STM32L4, oparty na rdzeniu Arm Cortex-M4.',
    useInGrzybol:
      'Stanowi centralną jednostkę GRZYBOL9000. Odbiera dane GNSS, obsługuje wyświetlacz, przyciski i pozostałe peryferia.',
    reason:
      'Seria STM32L4 oferuje niski pobór energii, przydatny w urządzeniu bateryjnym, oraz interfejsy potrzebne do komunikacji z pozostałą elektroniką.',
    specs: [
      { label: 'Rdzeń', value: 'Arm Cortex-M4' },
      { label: 'Taktowanie', value: 'Do 80 MHz' },
      { label: 'Flash', value: '128 KB' },
      { label: 'RAM', value: '64 KB' },
      { label: 'Obudowa', value: 'LQFP-48' },
      { label: 'Programowanie', value: 'SWD / ST-Link' }
    ],

    datasheet:
      'https://www.st.com/content/ccc/resource/technical/document/datasheet/group3/83/b3/60/f6/b1/cc/47/7e/DM00257211/files/DM00257211.pdf/jcr:content/translations/en.DM00257211.pdf'
  },
  {
    slug: 'l76',
    name: 'L76-M33',
    type: 'ODBIORNIK GNSS',
    description: 'Odbiór sygnałów satelitarnych i określanie pozycji.',
    image: 'grzybol-l76.png',
    partNumber: 'L76-M33',
    producer: 'Quectel',

    explanation:
      'Kompaktowy odbiornik GNSS wykorzystujący sygnały satelitarne do określania położenia.',
    useInGrzybol:
      'Dostarcza mikrokontrolerowi informacje o aktualnej pozycji urządzenia podczas wypraw do lasu.',
    reason:
      'Zastosowanie gotowego modułu GNSS upraszcza projekt własnego PCB i pozwala skupić się na nawigacji oraz oprogramowaniu urządzenia.',
    specs: [
      { label: 'Systemy', value: 'GPS / GLONASS i inne GNSS' },
      { label: 'Komunikacja', value: 'UART / NMEA' },
      { label: 'Montaż', value: 'SMD' },
      { label: 'Wymiary', value: '10,1 × 9,7 × 2,5 mm' }
    ],

    datasheet:
      'https://docs.rs-online.com/4a92/0900766b8147dbea.pdf'
  },
  {
    slug: 'tps631000',
    name: 'TPS631000DRLR',
    type: 'PRZETWORNICA BUCK-BOOST',
    description: 'Stabilizacja napięcia zasilającego 3,3 V.',
    image: 'grzybol-tps631000.png',
    partNumber: 'TPS631000DRLR',
    producer: 'Texas Instruments',

    explanation:
      'Synchroniczna przetwornica buck-boost, która może obniżać lub podwyższać napięcie wejściowe.',
    useInGrzybol:
      'Zapewnia napięcie 3,3 V dla elektroniki GRZYBOL9000 zasilanej akumulatorem Li-ion 18650.',
    reason:
      'Napięcie ogniwa Li-ion zmienia się podczas rozładowywania. Buck-boost umożliwia utrzymanie napięcia wyjściowego zarówno przy wyższym, jak i niższym napięciu akumulatora.',
    specs: [
      { label: 'Typ', value: 'Buck-boost' },
      { label: 'Napięcie wejściowe', value: '1,6-5,5 V' },
      { label: 'Wyjście w projekcie', value: '3,3 V' },
      { label: 'Obudowa', value: 'SOT-5X3-8 (DRL)' }
    ],

    datasheet:
      'https://www.ti.com/lit/ds/symlink/tps631000.pdf'
  },
  {
    slug: 'mcp73833',
    name: 'MCP73833-AMI/MF',
    type: 'UKŁAD ŁADOWANIA LI-ION',
    description: 'Kontroler ładowania akumulatora Li-ion 18650.',
    image: 'grzybol-mcp73833.png',
    partNumber: 'MCP73833-AMI/MF',
    producer: 'Microchip Technology',

    explanation:
      'Liniowy kontroler ładowania pojedynczego ogniwa Li-ion/Li-Po, pracujący w trybie stałego prądu i stałego napięcia (CC/CV).',
    useInGrzybol:
      'Obsługuje ładowanie ogniwa 18650 z zewnętrznego zasilania USB. W schemacie Rev A rezystor PROG 3,3 kΩ ustawia prąd ładowania na około 300 mA, a wyjście STAT sygnalizuje stan ładowania.',
    reason:
      'To prosty, dobrze udokumentowany układ do ładowania pojedynczego ogniwa, z możliwością ustawienia prądu i sygnalizacją stanu. Nie zastępuje osobnego zabezpieczenia akumulatora.',
    specs: [
      { label: 'Typ ładowania', value: 'Li-ion / Li-Po, 1 ogniwo' },
      { label: 'Metoda', value: 'CC/CV' },
      { label: 'Napięcie końcowe', value: '4,20 V' },
      { label: 'Prąd w Rev A', value: 'Około 300 mA (RPROG 3,3 kΩ)' },
      { label: 'Sygnalizacja', value: 'STAT1 / STAT2' },
      { label: 'Obudowa', value: 'DFN-10, 3 × 3 mm' }
    ],

    datasheet:
      'https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP73833-4-Stand-Alone-Linear-Li-Ion-Li-Polymer-Charge-Management-Controller-DS20002005.pdf'
  },
  {
    slug: 'lis2dw12',
    name: 'LIS2DW12',
    type: 'AKCELEROMETR',
    description: 'Trójosiowy czujnik przyspieszenia i ruchu.',
    image: 'grzybol-lis2dw12.png',
    partNumber: 'LIS2DW12',
    producer: 'STMicroelectronics',

    explanation:
      'Niskopoborowy akcelerometr MEMS mierzący przyspieszenie w trzech osiach X, Y i Z.',
    useInGrzybol:
      'Dostarcza informacje o ruchu i przechyleniu urządzenia. W połączeniu z magnetometrem może pomóc w określaniu orientacji GRZYBOL9000.',
    reason:
      'Niewielki rozmiar, niski pobór energii i interfejs SPI dobrze pasują do urządzenia zasilanego akumulatorem i sterowanego mikrokontrolerem STM32.',
    specs: [
      { label: 'Osie pomiarowe', value: 'X, Y, Z' },
      { label: 'Zakres', value: '±2 / ±4 / ±8 / ±16 g' },
      { label: 'Zasilanie', value: '1,62–3,6 V' },
      { label: 'Komunikacja', value: 'SPI / I²C' },
      { label: 'Obudowa', value: 'LGA-12, 2 × 2 mm' }
    ],

    datasheet: 'https://www.st.com/content/ccc/resource/technical/document/datasheet/group3/30/3a/4e/6b/68/16/4a/35/DM00323179/files/DM00323179.pdf/jcr:content/translations/en.DM00323179.pdf'
  },
  {
    slug: 'lis2mdl',
    name: 'LIS2MDL',
    type: 'MAGNETOMETR',
    description: 'Trójosiowy pomiar pola magnetycznego.',
    image: 'grzybol-lis2mdl.png',
    partNumber: 'LIS2MDL',
    producer: 'STMicroelectronics',

    explanation:
      'Cyfrowy magnetometr mierzący składowe pola magnetycznego w trzech osiach, wykorzystywany między innymi w kompasach elektronicznych.',
    useInGrzybol:
      'Ma umożliwiać wyznaczanie kierunku na podstawie pola magnetycznego Ziemi także wtedy, gdy urządzenie stoi w miejscu. Dokładny kompas wymaga kalibracji oraz kompensacji przechylenia.',
    reason:
      'Dzięki niewielkiej obudowie, małemu poborowi energii i interfejsowi SPI można go połączyć ze STM32 oraz akcelerometrem w systemie orientacji urządzenia.',
    specs: [
      { label: 'Osie pomiarowe', value: 'X, Y, Z' },
      { label: 'Zakres pola', value: '±50 gausów' },
      { label: 'Zasilanie', value: '1,71–3,6 V' },
      { label: 'Komunikacja', value: 'SPI / I²C' },
      { label: 'Obudowa', value: 'LGA-12, 2 × 2 mm' }
    ],

    datasheet: 'https://www.st.com/content/ccc/resource/technical/document/datasheet/group3/29/13/d1/e0/9a/4d/4f/30/DM00395193/files/DM00395193.pdf/jcr:content/translations/en.DM00395193.pdf'
  }
];
