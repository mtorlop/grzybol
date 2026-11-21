
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
  }
];
