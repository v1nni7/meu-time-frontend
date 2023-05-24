export interface Country {
  name: string
  code: string
  flag: string
}

export interface League {
  league: {
    id: number
    name: string
    type: string
    logo: string
  }
  country: {
    name: string
    code: string
    flag: string
  }
  seasons: {
    year: number
    start: string
    end: string
    current: boolean
  }[]
}

export interface Team {
  team: {
    id: number
    name: string
    code: string
    country: string
    founded: number
    national: boolean
    logo: string
  }
  venue: {
    id: number
    name: string
    address: string
    city: string
    capacity: number
    surface: string
    image: string
  }
}

export interface Player {
  player: {
    id: number
    name: string
    firstname: string
    lastname: string
    age: number
    birth: {
      date: string
      place: string
      country: string
    }
    nationality: string
    height: string
    weight: string
    injured: boolean
    photo: string
  }
  statistics: [
    {
      team: {
        id: number
        name: string
        logo: string
      }
      league: {
        id: number | null
        name: string
        country: string | null
        logo: string | null
        flag: string | null
        season: string
      }
      games: {
        appearences: number
        lineups: number
        minutes: number
        number: number | null
        position: string
        rating: string
        captain: boolean
      }
      substitutes: {
        in: number
        out: number
        bench: number
      }
      shots: {
        total: number
        on: number
      }
      goals: {
        total: number
        conceded: number | null
        assists: number | null
        saves: number | null
      }
      passes: {
        total: number
        key: number
        accuracy: number
      }
      tackles: {
        total: number | null
        blocks: number | null
        interceptions: number
      }
      duels: {
        total: number
        won: number
      }
      dribbles: {
        attempts: number
        success: number
        past: number | null
      }
      fouls: {
        drawn: number
        committed: number
      }
      cards: {
        yellow: number
        yellowred: number
        red: number
      }
      penalty: {
        won: number | null
        commited: number
        scored: number
        missed: number
        saved: number | null
      }
    },
  ]
}

export interface Statistics {
  league: {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
  }
  team: {
    id: number
    name: string
    logo: string
  }
  form: string
  fixtures: {
    played: {
      home: number
      away: number
      total: number
    }
    wins: {
      home: number
      away: number
      total: number
    }
    draws: {
      home: number
      away: number
      total: number
    }
    loses: {
      home: number
      away: number
      total: number
    }
  }
  goals: {
    for: {
      total: {
        home: number
        away: number
        total: number
      }
      average: {
        home: string
        away: string
        total: string
      }
      minute: {
        '0-15': {
          total: number | null
          percentage: string | null
        }
        '16-30': {
          total: number | null
          percentage: string | null
        }
        '31-45': {
          total: number | null
          percentage: string | null
        }
        '46-60': {
          total: number | null
          percentage: string | null
        }
        '61-75': {
          total: number | null
          percentage: string | null
        }
        '76-90': {
          total: number | null
          percentage: string | null
        }
        '91-105': {
          total: number | null
          percentage: string | null
        }
        '106-120': {
          total: number | null
          percentage: string | null
        }
      }
    }
    against: {
      total: {
        home: number
        away: number
        total: number
      }
      average: {
        home: string
        away: string
        total: string
      }
      minute: {
        '0-15': {
          total: number | null
          percentage: string | null
        }
        '16-30': {
          total: number | null
          percentage: string | null
        }
        '31-45': {
          total: number | null
          percentage: string | null
        }
        '46-60': {
          total: number | null
          percentage: string | null
        }
        '61-75': {
          total: number | null
          percentage: string | null
        }
        '76-90': {
          total: number | null
          percentage: string | null
        }
        '91-105': {
          total: number | null
          percentage: string | null
        }
        '106-120': {
          total: number | null
          percentage: string | null
        }
      }
    }
  }
  biggest: {
    streak: {
      wins: number
      draws: number
      loses: number
    }
    wins: {
      home: string
      away: string
    }
    loses: {
      home: string
      away: string
    }
    goals: {
      for: {
        home: number
        away: number
      }
      against: {
        home: number
        away: number
      }
    }
  }
  clean_sheet: {
    home: number
    away: number
    total: number
  }
  failed_to_score: {
    home: number
    away: number
    total: number
  }
  penalty: {
    scored: {
      total: number
      percentage: string
    }
    missed: {
      total: number
      percentage: string
    }
    total: number
  }
  lineups: {
    formation: string
    played: number
  }[]
  cards: {
    yellow: {
      '0-15': {
        total: number
        percentage: string
      }
      '16-30': {
        total: number
        percentage: string
      }
      '31-45': {
        total: number
        percentage: string
      }
      '46-60': {
        total: number
        percentage: string
      }
      '61-75': {
        total: number
        percentage: string
      }
      '76-90': {
        total: number
        percentage: string
      }
      '91-105': {
        total: number | null
        percentage: string | null
      }
      '106-120': {
        total: number | null
        percentage: string | null
      }
    }
    red: {
      '0-15': {
        total: number | null
        percentage: string | null
      }
      '16-30': {
        total: number | null
        percentage: string | null
      }
      '31-45': {
        total: number | null
        percentage: string | null
      }
      '46-60': {
        total: number | null
        percentage: string | null
      }
      '61-75': {
        total: number | null
        percentage: string | null
      }
      '76-90': {
        total: number | null
        percentage: string | null
      }
      '91-105': {
        total: number | null
        percentage: string | null
      }
      '106-120': {
        total: number | null
        percentage: string | null
      }
    }
  }
}
