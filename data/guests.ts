export interface Guest {
    name: string;
    tableNumber: number;
    tableName: string;
  }
  
  // Liste des invités organisée par table
  const guestsByTable: Record<string, string[]> = {
    'NGODI': [
      'Mr Dimené & Mme Djombi',
      'Mme Dikongue & Mme Kwedi',
      'Mr Nzinda Joseph & Mme',
      'Mr Patou & Mme',
      'mama de James & Mr'
    ],
  
    'NEW-BELL': [
      'Mr & Mme Siakam Guy',
      'Mr & Mme Almeida',
      'Mamie & Donald',
      'Mr & Mme Yimga Christian',
      'Mr Anthony Zinzou',
      'Yolande'
    ],
  
    'BONADIBONG': [
      'Mme Moudio',
      'Mme Engomé',
      'Mr Nzinda Pierre & Mme',
      'Mme Deveyre Agnès',
      'Maman Sarah',
      'Maman Thérèse',
      'Mr Sosso',
      'Mr Agboum & Mme'
    ],
  
    'ESSOS': [
      'Mr & Mme Malonga Micka',
      'Mr & Mme Nanga',
      'Mr & Mme Gweth Marky',
      'Mr & Mme Bikoï',
      'Mr & Mme Abessolo Edy'
    ],
  
    // 🔁 MODIFIÉE
    'OYOM-ABANG': [
      'Mr & Mme Lottin Therance',
      'Mr & Mme Nkwellé Valentin',
      'Mr & Mme Missi Victor',
      'Mr & Mme James',
      'Billy Douala & Mme'
    ],
  
    // 🔁 MODIFIÉE
    'POUMPOURI': [
      'Mr & Mme Sany Joseph',
      'Mlle Ndambwé Nina & Mady',
      'Mareise & Mr',
      'Mr & Mme Soppo Leonel',
      'Mr & Mme Douala Aldoph'
    ],
  
    'NEW-TOWN': [
      'Mr & Mme Tchamako',
      'Mr & Mme Kouemo Elie',
      'Mr & Mme Luizza Christian',
      'Mr & Mme Djiké Richard',
      'Mr & Mme Labo'
    ],
  
    'MANIGOLLE': [
      'Mr & Mme Ayuck',
      'Mr & Mme Beny-Ben',
      'Mme Esther',
      'Mme Kwedi Brigitte',
      'Alex & Sandrine',
      'Sarah & Gaëlle'
    ],
  
    'MOLYKO': [
      'Mr & Mme Mbot',
      'Mr & Mme Massé',
      'Sally & Jean-Daniel',
      'Boris',
      'Ngosso',
      'Mr Kanwa',
      'Mr Sarko'
    ],
  
    'MANKON': [
      'Mr & Mme Joe Maloumba',
      'Mr & Mme Sewodo Komi',
      'Mr & Mme Elock',
      'Mlle Menty',
      'Cathy & Mr',
      'Paulette Zebazé'
    ],
  
    // 🔁 MODIFIÉE
    'TAMDJ A': [
      'Mr & Mme Teke Chimène',
      'Mr & Mme Missé Pierre',
      'Mr & Mme Minkoh',
      'Mr & Mme Petit Essomé',
      'Divine & Francis'
    ],
  
    // 🔁 MODIFIÉE
    'MALIMBA': [
      'Mr & Mme Ngallé',
      'Mr & Mme Donatien Bouwe',
      'Mr & Mme Billy',
      'Mr & Mme Mooh',
      'Mme Leila & Mr Olivier'
    ],
  
    'MBOA-MANGA': [
      'Mr & Mme Madi',
      'Ulrich',
      'Tchinda Landry',
      'Ange & Tawambe',
      'Esther Waguen',
      'Carine Deffo',
      'Madeleine (Mathia)',
      'Donald'
    ],
  
    'MINKAN': [
      'Mr & Mme Ngomsi',
      'Mr & Mme Makon Maurice',
      'Sandrine & Debravo',
      'Camille & Tchapnda',
      'Amanda & Feunkeu'
    ],
  
    'ELIG-MFOMO': [
      'Noël & Henri',
      'Tata Wondjé & Mamie',
      'Mr & Mme Awono',
      'Tata Virginie',
      'Judith & Mr',
      'Joel Eloundou'
    ],
  
    'LEKIE': [
      'Maman Solange',
      'Marie-Joé',
      'Romaine',
      'Gaëlle',
      'Aurélie',
      'Manelle',
      'Laura',
      'Anonyme',
      'Mater & Mater de Carine'
    ],
  
    'SABONGARI': [
      'Mercy Solo & Mme',
      'Fosso André & Mme',
      'Marie Mengue & Mr',
      'Jp & Ivonne',
      'Mr & Mme Zito'
    ],
  
    // 🔁 REFAITE
    'PENJA': [
      'Romeo Wada',
      'Chancelin',
      'Erika',
      'Nadine',
      'Maquilleuse',
      'Belle-sœur de Polo',
      'Mlle Marie-Florence',
      'Mlle Desly',
      'Patrick & Mme'
    ],
  
    // 🆕 NOUVELLE TABLE
    'JAPOMA': [
      'Pedro',
      'Paul',
      'Linda Allemagne',
      'Queen',
      'Lydia',
      'Jeanne',
      'Laetitia',
      'Isabelle',
      'Dany',
      'Junior'
    ]
  };
  
  // Création de la liste complète des invités avec numéro de table
  const tableNames = Object.keys(guestsByTable);
  
  export const guests: Guest[] = tableNames.flatMap((tableName, tableIndex) => {
    const tableNumber = tableIndex + 1;
    return guestsByTable[tableName].map((name) => ({
      name: name.trim(),
      tableNumber,
      tableName
    }));
  });
  
  // Recherche exacte (insensible à la casse)
  export const findGuest = (searchName: string): Guest | undefined => {
    const normalizedSearch = searchName.trim().toLowerCase();
    return guests.find(
      (guest) => guest.name.toLowerCase() === normalizedSearch
    );
  };
  
  // Suggestions d'autocomplétion
  export const getGuestSuggestions = (searchTerm: string): Guest[] => {
    if (!searchTerm.trim()) return [];
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return guests
      .filter((guest) =>
        guest.name.toLowerCase().includes(normalizedSearch)
      )
      .slice(0, 5);
  };
  